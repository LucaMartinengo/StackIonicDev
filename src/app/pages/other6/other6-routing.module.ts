import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Other6Page } from './other6.page';

const routes: Routes = [
  {
    path: '',
    component: Other6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Other6PageRoutingModule {}
