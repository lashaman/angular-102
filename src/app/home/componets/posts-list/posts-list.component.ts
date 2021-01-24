import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  searchItem = 0;
  posts: Post[] = [{
    id: 0,
    title:'',
    body: '',
    userId: 0
  }];
  postToEdit: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 1
  };
  createPostData: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 1
  };
  postToEditId = 0;
  searchResult: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 1
  };
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.loadAllposts()
  }

  loadAllposts() {
     // tslint:disable-next-line:no-unused-expression
     this.httpService.getAllPosts().subscribe(
       next => this.posts = JSON.parse(JSON.stringify(next)),
       err => console.log(err)
     )
  }

  loadPostById() {
    this.httpService.getPostByid(this.searchItem).subscribe(
      next => this.searchResult = JSON.parse(JSON.stringify(next)),
      err => console.log(err)
    )
  }

  openEdit(id: number){
    this.postToEditId = id;
    this.httpService.getPostByid(id).subscribe(
      next => this.postToEdit = next,
      err => console.error(err)
    )
  }

  createPost(post: Post) {
    this.httpService.createPost(post).subscribe(
      next => console.log(next),
      err => console.error(err)
    )
  }

  editPost(id: number, post: Post){
    this.httpService.editPost(id, post).subscribe(
      next => console.log(next),
      err => console.error(err)
    )
  }

  deletePost(id: number){
    this.httpService.deletePost(id).subscribe(
      next => console.log(next),
      err => console.error(err)
    )
  }

}
