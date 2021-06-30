import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ITodo } from '../viewModels/i-todo';
import { UserService } from './user.service';

export const defaultTodo: ITodo = {
  id: '',
  title: '',
  description: '',
  status: '',
  who: {
    id: '',
    name: '',
  },
  dueDate: '',
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router
  ) {}

  private _todos: ITodo[] = []; //use _ beacuse it`s References
  baseURL = 'http://localhost:8000/todo';

  // Get Request Header [token auth]
  getReqheaders() {
    return {
      headers: {
        authorization: this.userService.getToken(),
      },
    };
  }
  //---------------------------------------------- Fetch Todo -------------------------------//

  fetchTodo() {
    this.http
      .get<{ todoData: ITodo[] }>(this.baseURL, this.getReqheaders())
      .subscribe(
        (data) => {
          return (this._todos = data.todoData);
        },
        (err) => console.log(err)
      );
  }
  //---------------------------------------------- Get Todos ---------------------------------//

  get todos() {
    return this._todos.slice();
  }
  //---------------------------------------------- Get Todo ById -----------------------------//

  getTodoById(id: string) {
    return this._todos.find((todo) => todo.id == id);
  }
  //---------------------------------------------- Add Todo ---------------------------------//

  addTodo(title: string, description: string, status: string, dueDate: string) {
    this.http
      .post<{ todoData: ITodo }>(
        this.baseURL,
        { title, description, status, dueDate },
        this.getReqheaders()
      )
      .subscribe(
        (data) => {
          this._todos.push(data.todoData);
          this.router.navigate(['todo']);
        },
        (err) => console.log(err)
      );
  }
  //---------------------------------------------- Update Todo ---------------------------------//

  updateTodo(
    id: string,
    data: {
      title: string;
      description: string;
      status: string;
      dueDate: string;
    }
  ) {
    this.http
      .put<{ todoData: ITodo }>(
        `${this.baseURL}/${id}`,
        data,
        this.getReqheaders()
      )
      .subscribe(
        (data) => {
          const todoIndex = this.todos.findIndex((todo) => todo.id == id);
          if (todoIndex > -1) {
            this._todos[todoIndex] = data.todoData;
          }
          this.router.navigate(['todo']);
        },
        (err) => console.log(err)
      );
  }
  //---------------------------------------------- Remove Todo ---------------------------------//

  removeTodo(id: string) {
    this.http
      .delete(`${this.baseURL}/${id}`, this.getReqheaders())
      .subscribe((data) => {
        this._todos = this._todos.filter((todo) => todo.id != id);
      });
  }
}
