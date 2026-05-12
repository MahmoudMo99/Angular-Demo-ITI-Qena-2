import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts-service';
import { IGetAllPosts } from '../../models/iget-all-posts';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-posts',
  imports: [ReactiveFormsModule],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class Posts implements OnInit {
  posts!: IGetAllPosts;

  private postsService = inject(PostsService);

  postForm!: FormGroup;

  isSubmitting: boolean = false;

  constructor() {
    this.postForm = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl(1),
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.postsService.getAllPosts().subscribe({
      next: (res) => {
        console.log('Data Loaded');
        console.log(res);
        this.posts = res;
      },
      error: (err) => {
        console.log('Failed Load Data');
        console.log(err.message);
      },
      complete: () => {
        console.log('Request Completed');
      },
    });
  }

  addPost() {
    this.isSubmitting = true;

    this.postsService.addPost(this.postForm.getRawValue()).subscribe({
      next: (res) => {
        alert(`Post: ${res.title} is added!`);
        this.posts.posts.unshift(this.postForm.getRawValue());
        this.postForm.reset();
        // this.loadData();
        this.isSubmitting = false;
      },
    });
  }

  deletePost(id: number) {
    this.postsService.deletePost(id).subscribe({
      next: (res) => {
        alert(`Post: ${res.title} is deleted!`);
        this.posts.posts = this.posts.posts.filter((post) => post.id !== id);
      },
    });
  }
}
