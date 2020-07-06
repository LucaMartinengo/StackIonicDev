import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda14Page } from './mda14.page';

const routes: Routes = [
  {
    path: '',
    component: Mda14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda14PageRoutingModule {}
