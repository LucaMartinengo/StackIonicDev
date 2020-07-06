import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mda4',
  templateUrl: './mda4.page.html',
  styleUrls: ['./mda4.page.scss'],
})
export class Mda4Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'first')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu/mda3');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu/mda5');
    }
  }

}
