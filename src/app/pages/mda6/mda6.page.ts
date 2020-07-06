import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mda6',
  templateUrl: './mda6.page.html',
  styleUrls: ['./mda6.page.scss'],
})
export class Mda6Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'first')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu/mda5');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu/mda7');
    }
  }

}
