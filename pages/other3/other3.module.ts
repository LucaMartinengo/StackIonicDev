import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Other3PageRoutingModule } from './other3-routing.module';

import { Other3Page } from './other3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Other3PageRoutingModule
  ],
  declarations: [Other3Page]
})
export class Other3PageModule {}
