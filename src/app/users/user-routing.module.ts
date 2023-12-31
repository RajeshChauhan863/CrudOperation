import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../users/user.component';
import { ListUserComponent } from './list-user/list-user.component';
const routes: Routes = [
 {
    path:'',
    component:UserComponent
  },
  {
    path:'userList',
    component: ListUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }