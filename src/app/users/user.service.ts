import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from './user';
import {HelperService} from '../shared/helper.service';

@Injectable()
export class UserService extends HelperService {

  constructor(private http: HttpClient) {
    super();
  }

  getUserByName(username: string): Observable<User[]> {
    if (username) {
      this.addHeaders();
      const url = `${this.userInfoApiUrl}search?q=${username}&access_token=${this.token}`;
      return this.http.get(url)
        .map(data => {
            const result = data['data'];
            console.log(result);
            return result.map(function (user: any) {
              return {
                id: user.id,
                name: user.username,
                profileImageUrl: user.profile_picture
              };
            });
          },
          (err: HttpErrorResponse) => {
            this.errorHandling(err);
          });
    }
  }
}
