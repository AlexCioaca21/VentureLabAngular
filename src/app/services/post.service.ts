import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url = 'http://www.omdbapi.com/?apikey=53729abd&s=';
  constructor(private httpClient: HttpClient) { }

  getPosts(searchString: string){
    return this.httpClient.get(this.url + searchString);
  }
  }

