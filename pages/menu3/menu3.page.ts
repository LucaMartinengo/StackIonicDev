import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.page.html',
  styleUrls: ['./menu3.page.scss'],
})
export class Menu3Page implements OnInit {

  paneEnabled = true;
  selectedPath ='';

  pages = [
    {
      title: 'Benvenuti',
      url: '/app/menu3/intro1',
    },
    {
      title: 'Mercanti d’anima',
      url: '/app/menu3/intro2',
    },
    {
      title: 'Luca Martinengo',
      url: '/app/menu3/intro3',
    },
    {
      title: 'Antonella Miccolis',
      url: '/app/menu3/intro4',
    },
    {
      title: 'Recensioni',
      url: '/app/menu3/intro5',
    }
  ];

  constructor(public menuCtrl: MenuController, private router: Router) {
    this.router.events.subscribe((res) => { 
      this.selectedPath = this.router.url;
    })  
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'third')
  } 
  
  ionViewWillEnter() {
    this.paneEnabled = true;
  }

  ionViewWillLeave() {
    this.paneEnabled = false;
  }

  assignPath(url) {
    this.selectedPath = url;
  }
}
