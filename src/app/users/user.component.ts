
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service'
import { user } from '../models/user';
import { NotificationService } from '../notification.service';
// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers';
import { ActivatedRoute } from '@angular/router'
@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  })

export class UserComponent implements OnInit  {
    registerForm!: FormGroup;
    submitted = false;
    id:any;
    
    userInfo=new user();
   
    constructor(private formBuilder: FormBuilder,private registerService:RegisterService,private notificationService:NotificationService,private route: ActivatedRoute) {
        
     }

    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        console.log(this.id);
        this.registerForm =    this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            // validates date format yyyy-mm-dd
            dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validators: MustMatch('password', 'confirmPassword')
        });

     
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        
        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }
   onRegister()
   {

    try
    {

   this.userInfo.title=this.registerForm.value['title'];
   this.userInfo.firstName=this.registerForm.value['firstName']
   this.userInfo.lastName=this .registerForm.value['lastName']
   this.userInfo.dob=this.registerForm.value['dob'];
   this.userInfo.email=this.registerForm.value['email'];
   this.userInfo.password=this.registerForm.value['password'];
   this.registerService.register(this.userInfo);
   this.notificationService.showSuccess("Data added successfully","Departmental Store")
    //     this.http.post<any[]>(`${this.apiUrl}/`,this.userInfo);
    }
    catch(ex)
    {
       throw ex;
    }



   }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }
}