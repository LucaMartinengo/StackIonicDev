import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda17Page } from './mda17.page';

const routes: Routes = [
  {
    path: '',
    component: Mda17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda17PageRoutingModule {}
