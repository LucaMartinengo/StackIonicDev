import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-other2',
  templateUrl: './other2.page.html',
  styleUrls: ['./other2.page.scss'],
})
export class Other2Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'second')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu2/other1');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu2/other3');
    }
  }

}
