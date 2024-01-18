import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../users/user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
const routes: Routes = [
 {
    path:'',
    component:UserComponent
  },
  {
    path:'userList',
    component: ListUserComponent
  },
  {
    path:'user/:id',
    component: EditUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }