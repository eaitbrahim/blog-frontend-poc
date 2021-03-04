import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './models/article';
import {ARTICLES} from './models/mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  getArticles():Observable<Article[]>{
    // const articles: Article[] = ARTICLES;
    // return of(articles);
    return this.http.get<Article[]>('http://localhost:8000/articles');
  }

  getArticle(key: string): Observable<Article>{
    // const articles: Article[] = ARTICLES.filter(a => a.key == key);
    // return of(articles[0]);
    return this.http.get<Article>(`http://localhost:8000/articles/${key}`);
  }
}
