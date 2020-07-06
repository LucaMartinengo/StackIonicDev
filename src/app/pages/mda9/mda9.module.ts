import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda9PageRoutingModule } from './mda9-routing.module';

import { Mda9Page } from './mda9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda9PageRoutingModule
  ],
  declarations: [Mda9Page]
})
export class Mda9PageModule {}
