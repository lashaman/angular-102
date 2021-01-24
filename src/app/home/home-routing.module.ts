import { PostsListComponent } from './componets/posts-list/posts-list.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './componets/list/list.component';
import { PipesExampleComponent } from './componets/pipe-examples/pipes-example.component';
import { SimpleFormComponent } from './componets/simple-form/simple-form.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'main',
        component: SimpleFormComponent,
        pathMatch: 'full'
      },
      {
        path: 'posts-list',
        component: PostsListComponent,
        pathMatch: 'full'
      },
      {
        path: 'pipes-example',
        component: PipesExampleComponent,
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
