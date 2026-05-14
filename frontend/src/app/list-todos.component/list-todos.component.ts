import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-todos',
  imports: [CommonModule],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css',
})
export class ListTodosComponent {
  
  todos = [
    {
      id: 1,
      description: 'Learn to drive.',
    }, 
    {
      id: 2,
      description: 'Become an Angular expert.',
    }, 
    {
      id: 3,
      description: 'Visit Japan.',
    }, 
  ]
}
