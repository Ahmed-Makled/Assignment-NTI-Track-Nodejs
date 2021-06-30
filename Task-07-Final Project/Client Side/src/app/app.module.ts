import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Layout-Components/header/header.component';
import { FooterComponent } from './Components/Layout-Components/footer/footer.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RegisterComponent } from './Components/Pages/register/register.component';
import { NotFoundComponent } from './Components/Pages/not-found/not-found.component';
import { TodoListComponent } from './Components/Todo/todo-list/todo-list.component';
import { TodoItemComponent } from './Components/Todo/todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './Components/Layout-Components/navbar/navbar.component';
import { TodoFormComponent } from './Components/Todo/todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    TodoListComponent,
    TodoItemComponent,
    NavbarComponent,
    TodoFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
