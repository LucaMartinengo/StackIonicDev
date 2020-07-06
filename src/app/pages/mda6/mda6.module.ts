import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda6PageRoutingModule } from './mda6-routing.module';

import { Mda6Page } from './mda6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda6PageRoutingModule
  ],
  declarations: [Mda6Page]
})
export class Mda6PageModule {}
