import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Other6PageRoutingModule } from './other6-routing.module';

import { Other6Page } from './other6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Other6PageRoutingModule
  ],
  declarations: [Other6Page]
})
export class Other6PageModule {}
