import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-intro5',
  templateUrl: './intro5.page.html',
  styleUrls: ['./intro5.page.scss'],
})
export class Intro5Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'third')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu3/intro4');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu/mda1');
    }
  }

}
