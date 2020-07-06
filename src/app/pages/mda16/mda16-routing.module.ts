import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda16Page } from './mda16.page';

const routes: Routes = [
  {
    path: '',
    component: Mda16Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda16PageRoutingModule {}
