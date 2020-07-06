import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mda10',
  templateUrl: './mda10.page.html',
  styleUrls: ['./mda10.page.scss'],
})
export class Mda10Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'first')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu/mda9');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu/mda11');
    }
  }

}
