import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda13PageRoutingModule } from './mda13-routing.module';

import { Mda13Page } from './mda13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda13PageRoutingModule
  ],
  declarations: [Mda13Page]
})
export class Mda13PageModule {}
