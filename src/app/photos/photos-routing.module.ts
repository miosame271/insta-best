import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PhotoListComponent} from './photo-list.component';
import {PhotoItemComponent} from './photo-item.component';

const photoRoutes: Routes = [
  {path: 'user/:id', component: PhotoListComponent},
  {path: 'photo/:id', component: PhotoItemComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(photoRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class PhotosRoutingModule { }
