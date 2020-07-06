import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  paneEnabled = true;
  selectedPath ='';

  pages = [
    {
      title: 'Il fantasma della langa',
      url: '/app/menu/mda1',
    },
    {
      title: 'Paglia',
      url: '/app/menu/mda2'
    },
    {
      title: 'Follia',
      url: '/app/menu/mda3'
    },
    {
      title: 'Respiro',
      url: '/app/menu/mda4'
    },
    {
      title: 'Testamento',
      url: '/app/menu/mda5'
    },
    {
      title: 'Vecchi, vergini, amanti',
      url: '/app/menu/mda6'
    },
    {
      title: 'Hibiscus',
      url: '/app/menu/mda7'
    },
    {
      title: 'Di tutti i colori',
      url: '/app/menu/mda8'
    },
    {
      title: 'Ops, intermezzo',
      url: '/app/menu/mda9'
    },
    {
      title: 'Illuminante',
      url: '/app/menu/mda10'
    },
    {
      title: 'Dora e Castello',
      url: '/app/menu/mda11'
    },
    {
      title: 'Documentario',
      url: '/app/menu/mda12'
    },
    {
      title: 'Felice Regresso',
      url: '/app/menu/mda13'
    },
    {
      title: 'Salsa',
      url: '/app/menu/mda14'
    },
    {
      title: 'Odia responsabilmente',
      url: '/app/menu/mda15'
    },
    {
      title: 'Insta-grana',
      url: '/app/menu/mda16'
    },
    {
      title: '"Capra" e «bue»',
      url: '/app/menu/mda17'
    },
    {
      title: 'Dedica',
      url: '/app/menu/mda18'
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
    this.menuCtrl.enable(true, 'first')
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
