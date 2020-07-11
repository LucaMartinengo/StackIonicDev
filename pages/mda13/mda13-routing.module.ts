import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda13Page } from './mda13.page';

const routes: Routes = [
  {
    path: '',
    component: Mda13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda13PageRoutingModule {}
