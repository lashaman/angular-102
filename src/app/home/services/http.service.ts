
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './../models/post';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private HTTP_URL = 'https://jsonplaceholder.typicode.com/posts';
  private headers = { 'content-type': 'application/json; charset=UTF-8'}
  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(this.HTTP_URL, {headers: this.headers});
  }

  getPostByid(id: number) {
    return this.http.get(this.HTTP_URL + '/' + id, {headers: this.headers});
  }

  createPost(post: Post) {
    return this.http.post(this.HTTP_URL , post , {headers: this.headers})
  }

  editPost(postId: number, post: Post) {
    return this.http.put(this.HTTP_URL + '/' + postId , post , {headers: this.headers})
  }

  deletePost(postId: number) {
    return this.http.delete(this.HTTP_URL + '/' + postId, {headers: this.headers} );
  }



}
