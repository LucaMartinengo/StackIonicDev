import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda12Page } from './mda12.page';

const routes: Routes = [
  {
    path: '',
    component: Mda12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda12PageRoutingModule {}
