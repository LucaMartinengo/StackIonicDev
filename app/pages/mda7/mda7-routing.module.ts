import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda7Page } from './mda7.page';

const routes: Routes = [
  {
    path: '',
    component: Mda7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda7PageRoutingModule {}
