import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { defaultTodo, TodoService } from 'src/app/Services/todo.service';
import { ITodo } from 'src/app/viewModels/i-todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ITodo = defaultTodo;

  check: boolean = true;

  constructor(private todoService: TodoService) {}

  //Function Remove Todo
  removeTodo() {
    this.todoService.removeTodo(this.todo.id);
  }

  //Function Spilt Text Area asc 13 "enter key" and convert to new line as li

  descriptionSplit() {
    let content: string = this.todo.description;

    content = content
      .split('\n')
      .filter((line) => line.trim() !== '')
      .map((line) => `<li class="fw-bold checked" ">${line}</li>`)
      .join('');
    return content;
  }

  //function Status colors

  statusClassesHeaderBefor() {
    return {
      done: this.todo.status == 'Done',
      todo: this.todo.status == 'Todo',
      doing: this.todo.status == 'Doing',
    };
  }
  statusClassesHeader() {
    return {
      doneHeader: this.todo.status == 'Done',
      todoHeader: this.todo.status == 'Todo',
      doingHeader: this.todo.status == 'Doing',
    };
  }

  ngOnInit(): void {}
}
