import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda2PageRoutingModule } from './mda2-routing.module';

import { Mda2Page } from './mda2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda2PageRoutingModule
  ],
  declarations: [Mda2Page]
})
export class Mda2PageModule {}
