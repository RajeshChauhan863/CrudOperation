import { Component,OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';  
import { RegisterService } from 'src/app/register.service';
import { Observable,Subscriber,Subscription } from 'rxjs';

export interface userModel{
  id:number;
  title:string;
  firstName:string;
  lastName:string;
  dob:Date;
  email:string;
  passowrd:string;
  termsandcondition:string;
  action:string;
}

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = ['title', 'firstName', 'lastName', 'dob','email','actions'];
  userData:userModel[]=[];
  constructor(private register:RegisterService) { }
  ngOnInit() {
    this.register.getUsers().subscribe(data=>{this.userData=data;console.log(this.userData)},error=>{console.log(error)});
    }

    editRow(user:userModel)
   {
   

   }
};
