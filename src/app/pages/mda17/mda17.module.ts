import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda17PageRoutingModule } from './mda17-routing.module';

import { Mda17Page } from './mda17.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda17PageRoutingModule
  ],
  declarations: [Mda17Page]
})
export class Mda17PageModule {}
