import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mda1',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'mda1',
        loadChildren: () => import('../mda1/mda1.module').then(m => m.Mda1PageModule)
      },
      {
        path: 'mda2',
        loadChildren: () => import('../mda2/mda2.module').then(m => m.Mda2PageModule)
      },
      {
        path: 'mda3',
        loadChildren: () => import('../mda3/mda3.module').then(m => m.Mda3PageModule)
      },
      {
        path: 'mda4',
        loadChildren: () => import('../mda4/mda4.module').then(m => m.Mda4PageModule)
      },
      {
        path: 'mda5',
        loadChildren: () => import('../mda5/mda5.module').then(m => m.Mda5PageModule)
      },
      {
        path: 'mda6',
        loadChildren: () => import('../mda6/mda6.module').then(m => m.Mda6PageModule)
      },
      {
        path: 'mda7',
        loadChildren: () => import('../mda7/mda7.module').then(m => m.Mda7PageModule)
      },
      {
        path: 'mda8',
        loadChildren: () => import('../mda8/mda8.module').then(m => m.Mda8PageModule)
      },
      {
        path: 'mda9',
        loadChildren: () => import('../mda9/mda9.module').then(m => m.Mda9PageModule)
      },
      {
        path: 'mda10',
        loadChildren: () => import('../mda10/mda10.module').then(m => m.Mda10PageModule)
      },
      {
        path: 'mda11',
        loadChildren: () => import('../mda11/mda11.module').then(m => m.Mda11PageModule)
      },
      {
        path: 'mda12',
        loadChildren: () => import('../mda12/mda12.module').then(m => m.Mda12PageModule)
      },
      {
        path: 'mda13',
        loadChildren: () => import('../mda13/mda13.module').then(m => m.Mda13PageModule)
      },
      {
        path: 'mda14',
        loadChildren: () => import('../mda14/mda14.module').then(m => m.Mda14PageModule)
      },
      {
        path: 'mda15',
        loadChildren: () => import('../mda15/mda15.module').then(m => m.Mda15PageModule)
      },
      {
        path: 'mda16',
        loadChildren: () => import('../mda16/mda16.module').then(m => m.Mda16PageModule)
      },
      {
        path: 'mda17',
        loadChildren: () => import('../mda17/mda17.module').then(m => m.Mda17PageModule)
      },
      {
        path: 'mda18',
        loadChildren: () => import('../mda18/mda18.module').then(m => m.Mda18PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
