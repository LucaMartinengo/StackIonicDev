import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda15PageRoutingModule } from './mda15-routing.module';

import { Mda15Page } from './mda15.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda15PageRoutingModule
  ],
  declarations: [Mda15Page]
})
export class Mda15PageModule {}
