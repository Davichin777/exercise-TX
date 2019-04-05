import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-repositories',
  templateUrl: './list-repositories.component.html',
  styleUrls: ['./list-repositories.component.sass']
})
export class ListRepositoriesComponent implements OnInit {
  repositories: any;
  nameUser: string;

  constructor(private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.nameUser = this.route.snapshot.paramMap.get("id");
    this.getRepositoriesByUser(this.nameUser);
  }

  getRepositoriesByUser(user: string) {
    this.http.get('https://api.github.com/users/'+ user +'/repos')
      .subscribe(result => {
        this.repositories = result;
      })
  }
}
