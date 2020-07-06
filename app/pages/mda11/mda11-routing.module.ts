import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda11Page } from './mda11.page';

const routes: Routes = [
  {
    path: '',
    component: Mda11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda11PageRoutingModule {}
