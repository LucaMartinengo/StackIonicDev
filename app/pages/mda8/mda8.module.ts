import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda8PageRoutingModule } from './mda8-routing.module';

import { Mda8Page } from './mda8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda8PageRoutingModule
  ],
  declarations: [Mda8Page]
})
export class Mda8PageModule {}
