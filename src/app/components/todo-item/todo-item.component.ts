import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

  @Input() todoItem;
  @Output() chosenItem = new EventEmitter();

  constructor() { }

  removeItem(item: string): void {
    this.chosenItem.emit(item);
  }
}
