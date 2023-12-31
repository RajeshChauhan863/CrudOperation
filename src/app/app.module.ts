import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';
import { RegisterService } from './register.service';
import { NotificationService } from './notification.service';
import { UserModule } from './users/user.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //CommonModule,
    FormsModule,
   // UserModule,
    //;HttpClientModule,
    ReactiveFormsModule,
     AppRoutingModule,
    // MatTableModule,
    BrowserAnimationsModule,
    // ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
