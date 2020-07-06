import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Mda14PageRoutingModule } from './mda14-routing.module';

import { Mda14Page } from './mda14.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Mda14PageRoutingModule
  ],
  declarations: [Mda14Page]
})
export class Mda14PageModule {}
