import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Other2Page } from './other2.page';

const routes: Routes = [
  {
    path: '',
    component: Other2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Other2PageRoutingModule {}
