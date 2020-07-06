import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda4Page } from './mda4.page';

const routes: Routes = [
  {
    path: '',
    component: Mda4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda4PageRoutingModule {}
