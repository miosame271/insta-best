import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {PhotoListComponent} from './photo-list.component';
import {PhotoItemComponent} from './photo-item.component';
import {PhotosService} from './photos.service';
import {PhotosRoutingModule} from './photos-routing.module';
import {HelperService} from '../shared/helper.service';
import {SortModule} from './sort.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SortModule,
    PhotosRoutingModule
  ],
  declarations: [
    PhotoListComponent,
    PhotoItemComponent
  ],
  providers: [HelperService, PhotosService]
})
export class PhotosModule {
}
