import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda18PageRoutingModule } from './mda18-routing.module';

import { Mda18Page } from './mda18.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda18PageRoutingModule
  ],
  declarations: [Mda18Page]
})
export class Mda18PageModule {}
