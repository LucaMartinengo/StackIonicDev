import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda6Page } from './mda6.page';

const routes: Routes = [
  {
    path: '',
    component: Mda6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda6PageRoutingModule {}
