import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SeePlacePageRoutingModule } from './see-place-routing.module';
import { SeePlacePage } from './see-place.page';
import {ReactiveFormsModule} from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeePlacePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SeePlacePage]
})
export class SeePlacePageModule {}
