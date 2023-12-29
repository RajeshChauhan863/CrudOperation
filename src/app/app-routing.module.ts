import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListUserComponent } from './users/list-user/list-user.component';
export const routes: Routes = [

{ path: '', component: AppComponent },
{ path: 'user', component: ListUserComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
