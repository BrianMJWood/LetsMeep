import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LetsMeep!';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) {}

  ngOnInit() {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  async getUsers() {
    await this.http.get('https://localhost:5001/api/users').subscribe(response => {
      console.log(response);
      this.users = response;
      console.log(this.users);
    }, error => {
      console.log(error);
    })
    console.log(this.users);
  }

  display() {
    console.log(this.users)
  }
}

