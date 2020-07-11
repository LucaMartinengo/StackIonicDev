import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Other5Page } from './other5.page';

const routes: Routes = [
  {
    path: '',
    component: Other5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Other5PageRoutingModule {}
