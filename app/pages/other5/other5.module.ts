import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Other5PageRoutingModule } from './other5-routing.module';

import { Other5Page } from './other5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Other5PageRoutingModule
  ],
  declarations: [Other5Page]
})
export class Other5PageModule {}
