import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { defaultTodo, TodoService } from 'src/app/Services/todo.service';
import { ITodo } from 'src/app/viewModels/i-todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Input() todo: ITodo = defaultTodo;

  editMod: boolean = false;
  todoID: string = '';

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Defined variable id pram of todo-form
    const id = this.route.snapshot.paramMap.get('id')!;

    // Default initial value to rest form
    this.todo.title = '';
    this.todo.description = '';
    this.todo.status = '';
    this.todo.dueDate = '';

    // check param found or not
    if (id) {
      const todo = this.todoService.getTodoById(id); // Get Todo Data byId
      // check param qual id of todo or not

      if (id == todo?.id) {
        this.todo.title = todo?.title!;
        this.todo.description = todo?.description!;
        this.todo.status = todo?.status!;
        this.todo.dueDate = todo?.dueDate!;
        this.todo.id = id!;
        this.editMod = true;
      } else {
        this.router.navigate(['err404']);
      }
    }
  }

  //function Add todo or Update
  addTodo() {
    if (this.editMod) {
      console.log(this.todo.id);
      this.todoService.updateTodo(this.todo.id, {
        title: this.todo.title,
        description: this.todo.description,
        status: this.todo.status,
        dueDate: this.todo.dueDate,
      });
    } else {
      this.todoService.addTodo(
        this.todo.title,
        this.todo.description,
        this.todo.status,
        this.todo.dueDate
      );
    }
  }
}
