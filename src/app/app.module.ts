import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {PhotosModule} from './photos/photos.module';
import {UsersModule} from './users/users.module';

import {HelperService} from './shared/helper.service';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    UsersModule,
    PhotosModule,
    AppRoutingModule
  ],
  providers: [HelperService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
