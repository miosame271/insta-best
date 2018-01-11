import {Component} from '@angular/core';

import {User} from './user';
import {UserService} from "./user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent {
  searchInitValue = '';
  searchResult: string;
  userList: User[];
  submitted = false;

  constructor(private userService: UserService) {
  }

  onSubmit(searchValue: string) {
    this.submitted = true;
    this.searchInitValue = '';
    this.searchResult = searchValue;
    this.userService.getUserByName(this.searchResult).subscribe(
      data => {
        this.userList = data;
      }
    );
  }

}
