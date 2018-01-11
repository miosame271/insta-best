import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

import {Photo} from './photo';
import {PhotosService} from './photos.service';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html'
})
export class PhotoItemComponent implements OnInit {
  photo: Photo;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private photosService: PhotosService) {
  }

  ngOnInit() {
    this.getPhoto();
  }

  getPhoto(): void {
    const photoID = this.route.snapshot.paramMap.get('id');
    this.photosService.getPhotoByID(photoID).subscribe(
      data => {
        this.photo = data;
      }
    );
  }

  goBack() {
    this.location.back();
  }

}
