import { Routes } from "@angular/router";
import { CollectionsComponent } from "./containers/collections/collections.component";

export const routes: Routes = [
    {
        path: 'list',
        component: CollectionsComponent
    },
    {
        path: '**', redirectTo: 'list', pathMatch: 'full'
    }
];