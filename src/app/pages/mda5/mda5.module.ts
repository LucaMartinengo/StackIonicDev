import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda5PageRoutingModule } from './mda5-routing.module';

import { Mda5Page } from './mda5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda5PageRoutingModule
  ],
  declarations: [Mda5Page]
})
export class Mda5PageModule {}
