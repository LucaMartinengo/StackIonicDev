import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-mda13',
  templateUrl: './mda13.page.html',
  styleUrls: ['./mda13.page.scss'],
})
export class Mda13Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'first')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu/mda12');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu/mda14');
    }
  }

}
