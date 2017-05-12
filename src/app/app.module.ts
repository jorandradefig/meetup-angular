import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestangularModule } from 'ngx-restangular';
import { NgPipesModule } from 'ngx-pipes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { DirectorsComponent } from './catalog/directors/directors.component';
import { GeorgeComponent } from './catalog/george/george.component';

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://netflixroulette.net/api/api.php?');
  //RestangularProvider.setDefaultHeaders({'Authorization': 'Bearer UDXPx-Xko0w4BRKajozCVy20X11MRZs1'});
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CatalogComponent,
    DirectorsComponent,
    GeorgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    RestangularModule.forRoot(RestangularConfigFactory),
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
