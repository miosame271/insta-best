import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Photo} from './photo';
import {HelperService} from '../shared/helper.service';

@Injectable()
export class PhotosService extends HelperService {

  constructor(private http: HttpClient) {
    super();
  }

  getPhotosByUserID(userID: number): Observable<Photo[]> {
    if (userID) {
      this.addHeaders();
      const url = `${this.userInfoApiUrl}${userID}/media/recent/?access_token=${this.token}`;
      return this.http.get(url)
        .map(data => {
            const result = data['data'];
            return result.map(function (photo: any) {
              return {
                id: photo.id,
                likes: photo['likes'].count,
                thumbnailUrl: photo['images']['thumbnail'].url
              };
            });
          },
          (err: HttpErrorResponse) => {
            this.errorHandling(err);
          });
    }
  }

  getPhotoByID(photoID: string): Observable<Photo> {
    if (photoID) {
      this.addHeaders();
      const url = `${this.mediaInfoApiUrl}${photoID}/?access_token=${this.token}`;
      return this.http.get(url)
        .map(data => {
            const result = data['data'];
            return {
              id: result.id,
              likes: result['likes'].count,
              imageUrl: result['images']['standard_resolution'].url
            };
          },
          (err: HttpErrorResponse) => {
            this.errorHandling(err);
          });
    }
  }
}
