import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro4',
  templateUrl: './intro4.page.html',
  styleUrls: ['./intro4.page.scss'],
})
export class Intro4Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'third')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu3/intro3');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu3/intro5');
    }
  }
}
