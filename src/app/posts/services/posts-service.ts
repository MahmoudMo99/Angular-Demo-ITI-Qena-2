import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGetAllPosts } from '../models/iget-all-posts';
import { API_URLS } from '../../constants/API_URLS';
import { IPosts } from '../models/iposts';
import { IAddPostRequest } from '../models/iadd-post-request';
import { IDeletePostResponse } from '../models/idelete-post-response';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);

  getAllPosts(): Observable<IGetAllPosts> {
    return this.http.get<IGetAllPosts>(API_URLS.getALlPosts);
  }

  getPostById(id: number): Observable<IPosts> {
    return this.http.get<IPosts>(API_URLS.getPostById(id));
  }

  addPost(postData: IAddPostRequest): Observable<IPosts> {
    return this.http.post<IPosts>(API_URLS.addPost, postData);
  }

  deletePost(id: number): Observable<IDeletePostResponse> {
    return this.http.delete<IDeletePostResponse>(API_URLS.deletePost(id));
  }
}
