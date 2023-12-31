import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../app/register.service'
import { user } from './models/user';
import { NotificationService } from './notification.service';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers';



@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent  {
    
}
