import { SharedService } from './../shared.service';
import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../models/article';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article  = {
    id: 0,
    title: '',
    key: '',
    description: '',
    date: new Date(),
    imageUrl:'',
    content:''
  };
  constructor(private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService,
    private meta: Meta) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.articleService.getArticle(params.key)
            .subscribe( (article: Article) => {
              if(typeof article == 'undefined' ){
                this.router.navigateByUrl('404');
                return;
              }
              this.article = article});
              this.titleService.setTitle(`${this.article.title} - ${this.sharedService.blogTitle}`);
              this.meta.addTags([
                {
                  name: 'description',
                  content: this.article.description
                },
                {
                  property: 'og:title',
                  content: `${this.article.title} - ${this.sharedService.blogTitle}`
                },
                {
                  property: 'og:type',
                  content: 'Website'
                },
                {
                  property: 'og:url',
                  content: `${this.sharedService.baseUrl}${this.article.key}`
                },
                {
                  property: 'og:image',
                  content: this.article.imageUrl
                },
                {
                  property: 'og:description',
                  content: this.article.description
                },
                {
                  property: 'og:site_name',
                  content: this.sharedService.blogTitle
                }


              ])
            });
  }

}
