import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

const routes: Routes = [
  {path: 'users/:id', component: UserDetailsComponent},
  {path: 'todos', component: TodosComponent},
  {path: '', component: TodoFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, routes]
})
class AppRoutingModule { }

export {AppRoutingModule, routes};
