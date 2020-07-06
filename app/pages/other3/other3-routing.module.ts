import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Other3Page } from './other3.page';

const routes: Routes = [
  {
    path: '',
    component: Other3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Other3PageRoutingModule {}
