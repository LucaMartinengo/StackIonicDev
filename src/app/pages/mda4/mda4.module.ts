import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda4PageRoutingModule } from './mda4-routing.module';

import { Mda4Page } from './mda4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda4PageRoutingModule
  ],
  declarations: [Mda4Page]
})
export class Mda4PageModule {}
