import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda3Page } from './mda3.page';

const routes: Routes = [
  {
    path: '',
    component: Mda3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda3PageRoutingModule {}
