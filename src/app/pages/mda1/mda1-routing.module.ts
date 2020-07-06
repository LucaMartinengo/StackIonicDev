import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda1Page } from './mda1.page';

const routes: Routes = [
  {
    path: '',
    component: Mda1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda1PageRoutingModule {}
