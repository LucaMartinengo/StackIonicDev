import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mda1',
  templateUrl: './mda1.page.html',
  styleUrls: ['./mda1.page.scss'],
})
export class Mda1Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'first')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/intro5');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu/mda2');
    }
  }

}
