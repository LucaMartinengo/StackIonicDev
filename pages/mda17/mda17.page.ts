import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mda17',
  templateUrl: './mda17.page.html',
  styleUrls: ['./mda17.page.scss'],
})
export class Mda17Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'first')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu/mda16');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu/mda18');
    }
  }

}
