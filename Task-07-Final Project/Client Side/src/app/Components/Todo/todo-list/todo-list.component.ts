import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/Services/todo.service';
import { ITodo } from 'src/app/viewModels/i-todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  // Get Todos
  get todos(): ITodo[] {
    return this.todoService.todos;
  }

  ngOnInit(): void {
    this.todoService.fetchTodo();
  }
}
