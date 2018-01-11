import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Photo} from './photo';
import {PhotosService} from './photos.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html'
})
export class PhotoListComponent implements OnInit {
  photoList: Photo[];

  constructor(private route: ActivatedRoute,
              private photosService: PhotosService) {
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.photosService.getPhotosByUserID(id).subscribe(
      data => {
        this.photoList = data;
      }
    );
  }

}
