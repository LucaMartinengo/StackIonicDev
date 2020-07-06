import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda10Page } from './mda10.page';

const routes: Routes = [
  {
    path: '',
    component: Mda10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda10PageRoutingModule {}
