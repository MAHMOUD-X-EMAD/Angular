import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPosts } from 'src/Posts';
import { IUsers } from 'src/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  _postUrl:string="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) {
    
   }

  getUsers():Observable<IUsers[]>
  {
      return this.http.get<IUsers[]>(this._postUrl).pipe(catchError((err)=>{
          return throwError(()=>err.message ||"server error");
        }
      )
    );
  }
}
