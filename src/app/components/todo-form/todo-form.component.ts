import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent {

  @Output() createNewItem = new EventEmitter<string>();
  newItem = "";

  constructor() { }

  addItem(title: string): void | undefined {
    if (!title) return;
    this.createNewItem.emit(title.toLowerCase());
    this.newItem = "";
  }
}
