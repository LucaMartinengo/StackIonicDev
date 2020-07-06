import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda12PageRoutingModule } from './mda12-routing.module';

import { Mda12Page } from './mda12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda12PageRoutingModule
  ],
  declarations: [Mda12Page]
})
export class Mda12PageModule {}
