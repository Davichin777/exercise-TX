import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.sass']
})
export class ListUsersComponent implements OnInit {
  usersGithub: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllUsersFromGitHub();
  }

  /**
   * Gets all users from Github.
   */
  getAllUsersFromGitHub() {
    this.http.get('https://api.github.com/users')
      .subscribe(result => {
        this.usersGithub = result;
      })
  }
}
