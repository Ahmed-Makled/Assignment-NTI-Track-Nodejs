import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;
  @Output() removeTodoEvent = new EventEmitter();

  constructor() {}

  removeTodo() {
    console.log('Removed!!');
    this.removeTodoEvent.emit(this.todo.id);
  }

  ngOnInit(): void {}
}
