import { Component, OnInit } from '@angular/core';
import { ApiUsersService } from 'src/app/services/api-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(private userService: ApiUsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })
  }

}
