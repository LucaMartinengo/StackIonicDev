import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { BackButtonService } from '../../services/back-button.service';
import { Platform } from '@ionic/angular'

@Component({
  selector: 'app-intro1',
  templateUrl: './intro1.page.html',
  styleUrls: ['./intro1.page.scss'],
})
export class Intro1Page implements OnInit {

  linkimg = "assets/other_medias/add_pc.png";
  img_hide = true;

  constructor(public menuCtrl: MenuController, 
              public navCtrl: NavController,
              public backButtonService: BackButtonService,
              public plt: Platform ) { 
    // if ((this.plt.is('mobileweb')) && (this.plt.is('android'))){
    //   this.linkimg = "assets/other_medias/add_android.jpg";
    //   this.img_hide =false;       
    // }              
    if (this.plt.is('mobileweb')){
      this.img_hide =false;       
    }              
    if (this.plt.is('android')){
      this.linkimg = "assets/other_medias/add_android.jpg";
    }              
    if (this.plt.is('ios')){
      this.img_hide =true;       
    }              
    if (this.plt.is('pwa')){
      this.img_hide =true;       
    }              
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.backButtonService.quitOnBackButton = true;
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'third')
  }
  
  ionViewWillLeave() {
    this.backButtonService.quitOnBackButton = false;
  }
 
  swipeEvent(e) {
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu3/intro2');
    }
  }
}
