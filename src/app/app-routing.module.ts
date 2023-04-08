import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { ParentComponent } from './parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotesComponent } from './Server/notes/notes.component';
const routes: Routes = [
  {path:'',redirectTo:'/Products',pathMatch:'full'},
  {path:'products',component:ProductsComponent},
  {path:'home',component:HomeComponent},
  {path:'posts',component:PostsComponent},
  {path:'users',component:UsersComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'notes',component:NotesComponent},
  {path:'comment/:id',component:CommentsComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
