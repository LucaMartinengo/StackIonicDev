import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.page.html',
  styleUrls: ['./intro2.page.scss'],
})
export class Intro2Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'third')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu3/intro1');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu3/intro3');
    }
  }
}
