import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController   } from '@ionic/angular';
import { DatabaseService } from 'src/app/services/database.service';
import { CreateCategoryPage } from '../create-category/create-category.page';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.page.html',
  styleUrls: ['./cat-details.page.scss'],
})
export class CatDetailsPage implements OnInit {

public paramData :any={
  id:'',
  name:'',
  child:''
}

  constructor( 
    private db : DatabaseService,
    private modalCtrl: ModalController,
    private navParams: NavParams,
    public alertController: AlertController
  ) { }

  ngOnInit() {    
  this.paramData   = this.navParams.data.paramData;   
  }


  onClose(){
    this.modalCtrl.dismiss();
  }
  async openModal(item){
  
   const modal = await this.modalCtrl.create({
       component: CatDetailsPage,
       componentProps: {
         "paramData": item,
       }
     });
 
     modal.onDidDismiss().then((dataReturned) => {
      
        this.db.getSubRecord(this.paramData.id).then(res=>{
          this.paramData.child = res;
        })
         
     });
 
     return await modal.present();
   }

  async addChildCategory(item){
    const modal = await this.modalCtrl.create({
      component: CreateCategoryPage,
      cssClass: 'addCatModal',
      componentProps: {
        "paramData": item,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned) {      
        this.db.getSubRecord(this.paramData.id).then(res=>{
          this.paramData.child = res;
        })
      }  
    });

    return await modal.present();
   }

  async onDelete(item){
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to delete category !!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.db.deleteNode(item.id).then(res=>{
              console.log("res : ", res)
              this.db.getSubRecord(this.paramData.id).then(data=>{
                console.log("sub record after delete: ", data)
                if(data){
                this.paramData.child = data;
                }else{
                  this.modalCtrl.dismiss();
                }
              })
            })
          }
        }
      ]
    });

    await alert.present();
   }
}
