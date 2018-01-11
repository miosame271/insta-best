import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {UserListComponent} from './user-list.component';
import {UserService} from './user.service';
import {UsersRoutingModule} from './users-routing.module';
import {HelperService} from '../shared/helper.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule
  ],
  declarations: [
    UserListComponent
  ],
  providers: [HelperService, UserService]
})
export class UsersModule {
}
