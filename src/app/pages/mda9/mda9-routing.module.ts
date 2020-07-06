import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda9Page } from './mda9.page';

const routes: Routes = [
  {
    path: '',
    component: Mda9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda9PageRoutingModule {}
