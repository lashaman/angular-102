import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ChildComponent } from './componets/child/child.component';
import { HeaderComponent } from './componets/header/header.component';
import { PipesExampleComponent } from './componets/pipe-examples/pipes-example.component';
import { SimpleFormComponent } from './componets/simple-form/simple-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CurrencyConverterPipe } from './pipes/currency-converter.pipe';
import { ListComponent } from './componets/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { PostsListComponent } from './componets/posts-list/posts-list.component';
import { HttpService } from './services/http.service';


@NgModule({
  declarations: [
    HeaderComponent,
    ChildComponent,
    ListComponent,
    SimpleFormComponent,
    HighlightDirective,
    PipesExampleComponent,
    CurrencyConverterPipe,
    HomeComponent,
    PostsListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CurrencyConverterPipe, HttpService]
})
export class HomeModule { }
