import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda7PageRoutingModule } from './mda7-routing.module';

import { Mda7Page } from './mda7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda7PageRoutingModule
  ],
  declarations: [Mda7Page]
})
export class Mda7PageModule {}
