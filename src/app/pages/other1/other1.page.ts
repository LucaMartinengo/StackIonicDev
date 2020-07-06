import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-other1',
  templateUrl: './other1.page.html',
  styleUrls: ['./other1.page.scss'],
})
export class Other1Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'second')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu/mda18');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu2/other2');
    }
  }
}
