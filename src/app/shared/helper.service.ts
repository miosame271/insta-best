import {Injectable} from '@angular/core';
import {HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class HelperService {
  protected token = '1222402075.ede3a54.01c1eea308ca46c9bc18088dc75914b7';
  protected userInfoApiUrl = 'https://api.instagram.com/v1/users/';
  protected mediaInfoApiUrl = 'https://api.instagram.com/v1/media/';

  protected addHeaders() {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
  }

  protected errorHandling(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.log('An error occured: ', err.error.message);
    } else {
      console.log(`Backend returned code ${err.status}, body was ${err.error}`);
    }
  }

}
