import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda3PageRoutingModule } from './mda3-routing.module';

import { Mda3Page } from './mda3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda3PageRoutingModule
  ],
  declarations: [Mda3Page]
})
export class Mda3PageModule {}
