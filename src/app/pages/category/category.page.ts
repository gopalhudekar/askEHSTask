import { DatabaseService, Cat } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertController, ModalController, NavParams  } from '@ionic/angular';
import {CreateCategoryPage} from '../create-category/create-category.page'
import { CatDetailsPage } from '../cat-details/cat-details.page';
@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  category :any ;
  constructor(private db: DatabaseService,
    private modalCtrl: ModalController,
    private alertController :AlertController
    ) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getmainCategory().subscribe(devs => {
          this.category = devs;
          console.log('Database data: ', this.category)
        })
     
      }
    });
  }

  ionViewWillEnter(){
   this.getAllRecord();
  }


  getAllRecord(){
    this.db.getAllRecord().then(res=>{
      console.log("All record : ", res)
    })
  }
 async openModal(item){
   console.log("item : ", item)
    const modal = await this.modalCtrl.create({
      component: CatDetailsPage,
      componentProps: {
        "paramData": item,
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      this.db.loadmainCategory();
    });

    return await modal.present();
  }


 async addmainCategory(){
    const modal = await this.modalCtrl.create({
      component: CreateCategoryPage,
      cssClass: 'addCatModal',
      componentProps: {
        "paramData": '',
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned) {
       this.db.loadmainCategory();
      }  
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
       this.db.loadmainCategory();
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
              this.db.loadmainCategory();
            })
          }
        }
      ]
    });

    await alert.present();
   }
}
