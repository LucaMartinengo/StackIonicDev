import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda8Page } from './mda8.page';

const routes: Routes = [
  {
    path: '',
    component: Mda8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda8PageRoutingModule {}
