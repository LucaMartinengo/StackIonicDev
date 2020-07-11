import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda1PageRoutingModule } from './mda1-routing.module';

import { Mda1Page } from './mda1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda1PageRoutingModule
  ],
  declarations: [Mda1Page]
})
export class Mda1PageModule {}
