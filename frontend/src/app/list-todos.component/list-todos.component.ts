import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export class Todo {
  constructor (
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent {
  
  todos = [
    new Todo(1, 'Learn to drive', true, new Date()),
    new Todo(1, 'Become an Angular expert', false, new Date()),
    new Todo(1, 'Visit Japan', false, new Date()),
  ]
}
