import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.page.html',
  styleUrls: ['./menu2.page.scss'],
})
export class Menu2Page implements OnInit {
  paneEnabled = true;
  selectedPath ='';

  pages = [
    {
      title: 'Dolores',
      url: '/app/menu2/other1'
    },
    {
      title: 'La Danza Del Pathos',
      url: '/app/menu2/other2'
    },
    {
      title: 'Pareidolia',
      url: '/app/menu2/other3'
    },
    {
      title: 'Consapevoli',
      url: '/app/menu2/other4'
    },
    {
      title: 'Fiori Di Carta',
      url: '/app/menu2/other5'
    },
    {
      title: 'XVIII Dicembre',
      url: '/app/menu2/other6'
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
    this.menuCtrl.enable(true, 'second')
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
