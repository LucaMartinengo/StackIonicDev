import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda15Page } from './mda15.page';

const routes: Routes = [
  {
    path: '',
    component: Mda15Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda15PageRoutingModule {}
