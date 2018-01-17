import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { VoteComponent } from './vote/vote.component';
import { LoginComponent } from './login/login.component';
import { TodosComponent } from './todos/todos.component';
import { VoterComponent } from './voter/voter.component';
import { TodoService } from './services/todo.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    VoteComponent,
    LoginComponent,
    TodosComponent,
    VoterComponent,
    UserDetailsComponent,
    NavComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ TodoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
