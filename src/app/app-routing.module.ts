import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListUserComponent } from './users/list-user/list-user.component';
export const routes: Routes = [

{ path: '', component: AppComponent },
{     path:'users',
    loadChildren:()=> import('./users/user.module').then(m=> m.UserModule)}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
