import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IPosts } from 'src/Posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  _postUrl:string="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) {
    
   }

  getPosts():Observable<IPosts[]>
  {
      return this.http.get<IPosts[]>(this._postUrl).pipe(catchError((err)=>{
          return throwError(()=>err.message ||"server error");
        }
      )
    );
  }
}
