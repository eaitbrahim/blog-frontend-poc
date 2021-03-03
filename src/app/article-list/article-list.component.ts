import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { ARTICLES } from '../models/mock-articles';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  articles: Article[] = [];
  constructor(private articleService: ArticleService,
    private titleService: Title,
    private sharedService: SharedService) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.sharedService.blogTitle}`);
    this.getArticles();
  }

  getArticles(): void{
    this.articleService.getArticles().subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }
}
