import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  userList: User[] = this.userService.list;
  currentUser: User = new User;

  constructor(private userService: UserService) { }

  onSelectUser(user: User) {
    this.currentUser = user;
  }

  onUpdateUser(user: User) {
    this.userService.updateUser(user);
  }

  onDeleteUser(user: User) {
    this.userService.removeUser(user);
  }

}
