import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Movies';
  post: any;

  postsData = null;
  constructor(private service:PostService) {}

  ngOnInit() { 
    this.post.getPosts().subscribe( (data:any) =>
    this.postsData=data);
  }

}



