import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LetsMeep!';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getUsers();
    this.display();
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

