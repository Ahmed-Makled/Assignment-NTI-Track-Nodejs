import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Pages/login/login.component';
import { NotFoundComponent } from './Components/Pages/not-found/not-found.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { TodoFormComponent } from './Components/Todo/todo-form/todo-form.component';
import { TodoListComponent } from './Components/Todo/todo-list/todo-list.component';
import { AuthRequiredGuard } from './Guards/auth-required.guard';
import { UnAuthRequiredGuard } from './Guards/un-auth-required.guard';

const routes: Routes = [
  {
    path: 'todo',
    component: TodoListComponent,

    canActivate: [AuthRequiredGuard],
  },

  {
    path: 'todo-form/add',
    component: TodoFormComponent,
    canActivate: [AuthRequiredGuard],
  },
  { path: 'todo-form/update/:id', component: TodoFormComponent },

  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnAuthRequiredGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [UnAuthRequiredGuard],
  },

  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
  { path: 'err404', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
