import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Other4Page } from './other4.page';

const routes: Routes = [
  {
    path: '',
    component: Other4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Other4PageRoutingModule {}
