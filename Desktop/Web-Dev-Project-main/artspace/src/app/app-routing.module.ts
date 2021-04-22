import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { AboutComponent } from './components/about/about.component';
import { UserComponent } from './components/user/user.component';
import { FollowsComponent } from './components/follows/follows.component';
import {AlbumsComponent} from './albums/albums.component';
// import {AlbumDetailComponent} from './album-detail/album-detail.component';
import {AlbumPhotosComponent} from './album-photos/album-photos.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UploadPinComponent } from './components/upload-pin/upload-pin.component'

//Moved routes here from app.module.ts - Shayakhmet
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'add', component: UploadPinComponent},
  {path: ':id', component: UserComponent, children: [
  {path: 'follows', component: FollowsComponent },
  {path: 'albums', component: AlbumsComponent},
  // {path: 'albums/:id', component: AlbumDetailComponent},
  {path: 'albums/:id/photos', component: AlbumPhotosComponent},
  {path: 'settings', component: SettingsComponent }
  ]},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
