import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  @Input() todoList;
  @Output() chosenItem = new EventEmitter<ITodo>();

  constructor() { }

  removeItem(item: ITodo): void {
    this.chosenItem.emit(item);
  }
}
