import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [{
  path: 'articles', component: ArticleListComponent
},
{
  path: 'about', component: AboutComponent
},
{
  path: '404', component: NotFoundComponent
},
{
  path: '', component: ArticleListComponent
},
{
  path: ':key', component: ArticleComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
