import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mda14',
  templateUrl: './mda14.page.html',
  styleUrls: ['./mda14.page.scss'],
})
export class Mda14Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'first')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu/mda13');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu/mda15');
    }
  }

}
