import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mda18Page } from './mda18.page';

const routes: Routes = [
  {
    path: '',
    component: Mda18Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mda18PageRoutingModule {}
