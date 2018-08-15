import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { CollectionsComponent } from "./containers/collections/collections.component";
import { MaterialModule } from "../material.module";
import { CommonModule } from '@angular/common';
import { CardCollectionComponent } from './components/card-collection/card-collection.component';
import { FormsModule } from '@angular/forms'

const routes: Routes = [
  {
    path: '',
    component: CollectionsComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  declarations: [CollectionsComponent, CardCollectionComponent]
})
export class CollectionsModule { }
