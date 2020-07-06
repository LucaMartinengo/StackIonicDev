import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Other1PageRoutingModule } from './other1-routing.module';

import { Other1Page } from './other1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Other1PageRoutingModule
  ],
  declarations: [Other1Page]
})
export class Other1PageModule {}
