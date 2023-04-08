import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IProducts } from '../SharedClassesAndTypes/iproducts';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  _url:string="/assets/Data/Products.json";
  
  constructor(private http:HttpClient) { }

  GetAllProducts():Observable<IProducts[]>
  {
    return this.http.get<IProducts[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=>err.message ||"server error");
    }));
  }

  GetProductById(Id:number)
  {
    return this.http.get<IProducts[]>(this._url).pipe(catchError((err)=>{
        return throwError(()=>err.message ||"server error");
      }));
    
  }

}