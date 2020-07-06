import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-other3',
  templateUrl: './other3.page.html',
  styleUrls: ['./other3.page.scss'],
})
export class Other3Page implements OnInit {

  constructor(public menuCtrl: MenuController, public navCtrl: NavController ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'second')
  }
 
  swipeEvent(e) {
    if (e.direction == 4) {
      this.navCtrl.navigateBack('/app/menu2/other2');
    }
    if (e.direction == 2) {
      this.navCtrl.navigateForward('/app/menu2/other4');
    }
  }

}
