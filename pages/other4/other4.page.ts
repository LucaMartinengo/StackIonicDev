import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-other4',
  templateUrl: './other4.page.html',
  styleUrls: ['./other4.page.scss'],
})
export class Other4Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'second')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu2/other3');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu2/other5');
    }
  }

}
