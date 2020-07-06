import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Other4PageRoutingModule } from './other4-routing.module';

import { Other4Page } from './other4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Other4PageRoutingModule
  ],
  declarations: [Other4Page]
})
export class Other4PageModule {}
