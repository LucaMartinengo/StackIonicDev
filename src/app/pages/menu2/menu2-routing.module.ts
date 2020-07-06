import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu2Page } from './menu2.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'other1',
    pathMatch: 'full'
  },
  {
    path: '',
    component: Menu2Page,
    children: [
      {
        path: 'other1',
        loadChildren: () => import('../other1/other1.module').then(m => m.Other1PageModule)
      },
      {
        path: 'other2',
        loadChildren: () => import('../other2/other2.module').then(m => m.Other2PageModule)
      },
      {
        path: 'other3',
        loadChildren: () => import('../other3/other3.module').then(m => m.Other3PageModule)
      },
      {
        path: 'other4',
        loadChildren: () => import('../other4/other4.module').then(m => m.Other4PageModule)
      },
      {
        path: 'other5',
        loadChildren: () => import('../other5/other5.module').then(m => m.Other5PageModule)
      },
      {
        path: 'other6',
        loadChildren: () => import('../other6/other6.module').then(m => m.Other6PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Menu2PageRoutingModule {}
