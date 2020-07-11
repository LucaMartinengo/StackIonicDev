import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mda3',
  templateUrl: './mda3.page.html',
  styleUrls: ['./mda3.page.scss'],
})
export class Mda3Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'first')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu/mda2');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu/mda4');
    }
  }

}
