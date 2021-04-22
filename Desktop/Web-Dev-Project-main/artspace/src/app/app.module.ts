import { NgModule } from '@angular/core';
import { ModalModule} from 'ngx-bootstrap/modal';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import { FollowsComponent } from './components/follows/follows.component';
import { AlbumsComponent } from './albums/albums.component';
// import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UploadPinComponent } from './components/upload-pin/upload-pin.component';
import { AuthInterceptor } from './AuthInterceptor';

//I moved routes to app-routing.module.ts - Shayakhmet

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    // AlbumDetailComponent,
    AlbumPhotosComponent,
    CategoriesComponent,
    AboutComponent,
    UserComponent,
    FollowsComponent,
    SettingsComponent,
    UploadPinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
