import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeePlacePage } from './see-place.page';

const routes: Routes = [
  {
    path: '',
    component: SeePlacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeePlacePageRoutingModule {}
