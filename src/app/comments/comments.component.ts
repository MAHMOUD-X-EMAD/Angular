import { Component } from '@angular/core';
import { IComment } from '../Comments';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  constructor(private postService:PostsService,private router:Router,private activatedRoute:ActivatedRoute,private http:HttpClient){

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      this.selectedId=params.get("id");
    });
  }
  selectedId:any=1;
  url:string="https://jsonplaceholder.typicode.com/posts/"+this.selectedId+"/comments "

  comments:Observable<IComment[]>=
  
  this.http.get<IComment[]>(this.url).pipe(catchError((err)=>{
     return throwError(()=>err.message ||"server error");
  }
  )
  );
}
