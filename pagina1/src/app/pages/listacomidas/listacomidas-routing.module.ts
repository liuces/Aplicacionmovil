import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListacomidasPage } from './listacomidas.page';

const routes: Routes = [
  {
    path: '',
    component: ListacomidasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListacomidasPageRoutingModule {}
