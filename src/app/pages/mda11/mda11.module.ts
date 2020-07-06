import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda11PageRoutingModule } from './mda11-routing.module';

import { Mda11Page } from './mda11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda11PageRoutingModule
  ],
  declarations: [Mda11Page]
})
export class Mda11PageModule {}
