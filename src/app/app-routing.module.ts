import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DirectorsComponent } from './catalog/directors/directors.component';
import { GeorgeComponent } from './catalog/george/george.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'catalog',
    children: [
      { path: 'directors', component: DirectorsComponent },
      { path: 'george', component: GeorgeComponent },
      { path: 'films', component: CatalogComponent },
      { path: 'actors', component: HomeComponent }
    ],
    component: CatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
