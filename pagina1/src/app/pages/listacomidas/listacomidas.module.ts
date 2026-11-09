import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ListacomidasPageRoutingModule } from './listacomidas-routing.module';

import { ListacomidasPage } from './listacomidas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListacomidasPageRoutingModule
  ],
  declarations: [ListacomidasPage]
})
export class ListacomidasPageModule {}
