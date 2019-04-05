import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ListRepositoriesComponent } from './repositories/list-repositories/list-repositories.component';

const routes: Routes = [
  {
    path: 'users',
    component: ListUsersComponent
  },
  {
    path: ':id/repositories',
    component: ListRepositoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
