import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mda18',
  templateUrl: './mda18.page.html',
  styleUrls: ['./mda18.page.scss'],
})
export class Mda18Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'first')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu/mda17');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu2/other1');
    }
  }

}
