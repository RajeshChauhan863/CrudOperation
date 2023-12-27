import { Injectable } from '@angular/core';
import { user } from './models/user';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable,Subscriber } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = 'https://localhost:7147/api/user/addUser';

  constructor(private http:HttpClient) { }

  register(data:user )
  {

   try
    
   {
    debugger;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
         });

         var userInfo={
          "title" : data.title,
          "firstName" : data.firstName,
          "lastName" : data.lastName,
          "dob" :   data.dob,
          "email" : data.email,
          "password" :data.password
         }

          console.log('userinfo');
          console.log(JSON.stringify(userInfo));
    
        this.http.post<user>(`${this.apiUrl}/`,userInfo,{headers:headers}).subscribe(
          (response) => {
            console.log('Response:', response);
          },
          (error) => {
            console.error('Error:', error);
          }
        );;
   }
   catch(ex)
   {
      throw ex;
   }



  }


}
