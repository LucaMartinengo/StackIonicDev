import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mda2',
  templateUrl: './mda2.page.html',
  styleUrls: ['./mda2.page.scss'],
})
export class Mda2Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'first')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu/mda1');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu/mda3');
    }
  }

}
