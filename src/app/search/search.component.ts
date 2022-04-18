import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  userInput: string = '';
  user: any;
  constructor(private userservice: UserService) {}

  ngOnInit(): void {}
  getUsername(userName: string) {
    console.log(userName);
    this.userservice.getUser(userName).then((result) => this.user=result);
  }
}
