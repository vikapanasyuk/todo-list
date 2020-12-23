import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/interfaces/todo';
import { TodoStoreService } from 'src/app/services/todo-store.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList: ITodo[] = [];
  id: number = 10;

  constructor( private _todoStore: TodoStoreService ) {}

  ngOnInit(): void {
    this._todoStore.fetchData(10)
      .then(todoList => this.todoList = todoList);
  }

  removeItem(todoItem: ITodo): void {
    this.todoList = this.todoList.filter(item => item !== todoItem);
  }

  addItem(item: string): void | undefined {
    const title = this.checkItem(item);
    if (title) return;
    this.todoList.push({
      userId: 1,
      id: ++this.id,
      title: item,
      completed: false
    });
  }

  checkItem(currentItem: string): ITodo | undefined {
    return this.todoList.find(item => item.title === currentItem);
  }
}
