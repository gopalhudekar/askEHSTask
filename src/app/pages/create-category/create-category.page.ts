import { DatabaseService, Cat } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController, NavParams, ToastController  } from '@ionic/angular';
import { Router,ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.page.html',
  styleUrls: ['./create-category.page.scss'],
})
export class CreateCategoryPage implements OnInit {
  public paramData :any={
    id:'',
    name:'',
    child:''
  }
  public name:string='';
  
  constructor(
    private db: DatabaseService,
    private modalCtrl: ModalController,
    private navParams:NavParams,
    public router: Router,
    private route: ActivatedRoute,
    private toastController :ToastController
  ) { }

  ngOnInit() {
    this.paramData   = this.navParams.data.paramData;   
  }

  onClose(){
    this.modalCtrl.dismiss()
  }

  onCreate(){
    if(this.paramData && this.paramData.id){
    this.db.addRecord(this.name, this.paramData.id).then(res=>{
      console.log("addRecord : ", res )
      this.modalCtrl.dismiss(true);
    })
  }else{
    this.db.addRecord(this.name, '').then(res=>{
      console.log("addRecord : ", res )
      this.modalCtrl.dismiss(true);
    })
  }
  }
  
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
