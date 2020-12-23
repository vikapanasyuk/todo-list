import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})

export class TodoStoreService {

  constructor() { }

  fetchData(limit): Promise<ITodo[]> {
    return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
      .then(response => response.json());
  }
}
