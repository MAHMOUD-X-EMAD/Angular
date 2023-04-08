import { Component } from '@angular/core';
import { IPosts } from 'src/Posts';
import { PostsService } from '../posts.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IComment } from '../Comments';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  listOfPosts! : IPosts[];
  errorMessage : any;
 
  
constructor(private postService:PostsService,private router:Router,private activatedRoute:ActivatedRoute,private http:HttpClient){

}

ngAfterViewInit(): void {

  this.postService.getPosts().subscribe({
    next:data=>this.listOfPosts=data,
    error:error=>this.errorMessage=error
  });
}


  
onSelect(post:any)
  {
    //navigate to department details component and pass the id to it
    this.router.navigate(["/comment",post.id]);
  }


}
