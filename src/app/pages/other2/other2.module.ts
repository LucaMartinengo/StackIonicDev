import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Other2PageRoutingModule } from './other2-routing.module';

import { Other2Page } from './other2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Other2PageRoutingModule
  ],
  declarations: [Other2Page]
})
export class Other2PageModule {}
