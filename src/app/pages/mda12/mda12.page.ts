import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mda12',
  templateUrl: './mda12.page.html',
  styleUrls: ['./mda12.page.scss'],
})
export class Mda12Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'first')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu/mda11');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu/mda13');
    }
  }

}
