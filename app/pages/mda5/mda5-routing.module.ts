import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda5Page } from './mda5.page';

const routes: Routes = [
  {
    path: '',
    component: Mda5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda5PageRoutingModule {}
