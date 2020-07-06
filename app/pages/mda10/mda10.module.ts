import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda10PageRoutingModule } from './mda10-routing.module';

import { Mda10Page } from './mda10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda10PageRoutingModule
  ],
  declarations: [Mda10Page]
})
export class Mda10PageModule {}
