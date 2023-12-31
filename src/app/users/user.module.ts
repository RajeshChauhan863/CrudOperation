import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';
import { ListUserComponent } from '../users/list-user/list-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';
import { RegisterService } from '../register.service';
import { NotificationService } from '../notification.service';
import { UserComponent } from './user.component';
import { UsersRoutingModule } from './user-routing.module';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    ListUserComponent,
    UserComponent
  ],
  imports: [
    // BrowserModule,
    UsersRoutingModule,
    CommonModule,
     FormsModule,
     HttpClientModule,
    ReactiveFormsModule,
     MatTableModule,
    // BrowserAnimationsModule,
      ToastrModule.forRoot()
  ],
 providers: [RegisterService,NotificationService,ToastrService],
  bootstrap: [UserComponent]
})
export class UserModule { }
