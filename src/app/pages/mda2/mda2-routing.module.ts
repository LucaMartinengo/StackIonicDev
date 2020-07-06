import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda2Page } from './mda2.page';

const routes: Routes = [
  {
    path: '',
    component: Mda2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda2PageRoutingModule {}
