import { Injectable } from '@angular/core';
import { user } from './models/user';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable,Subscriber, catchError, throwError,Subject } from 'rxjs';
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

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  apiUrl = 'https://localhost:7147/api/user';


  private fillAllFilledSubject : Subject<userModel>;

  constructor(private http:HttpClient) {
      this.fillAllFilledSubject=new Subject<userModel>();

   }

   togglUser(opening: userModel): void {
    this.fillAllFilledSubject.next(opening);
}
onUserToggle(): Observable<userModel> {
  return this.fillAllFilledSubject;
}

  
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
    
        this.http.post<user>(`${this.apiUrl}/addUser`,userInfo,{headers:headers}).subscribe(
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

  getUsers()
  {

    return this.http.get<any[]>(`${this.apiUrl}/getUsers`).pipe(catchError((error:any)=>{return throwError(error)}));

  }


}
