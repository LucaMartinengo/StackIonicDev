import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda16PageRoutingModule } from './mda16-routing.module';

import { Mda16Page } from './mda16.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda16PageRoutingModule
  ],
  declarations: [Mda16Page]
})
export class Mda16PageModule {}
