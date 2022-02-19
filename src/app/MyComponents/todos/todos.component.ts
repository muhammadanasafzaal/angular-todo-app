import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string
  todos:Todo[]; //todos array named Todo that we defined in Todo.ts
  constructor() { 
    this.localItem = localStorage.getItem('todos');
    if(this.localItem === null){
      this.todos = []
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo){ //receives the todo item index of the clicked item
    console.log('todo from todo ts ==>',todo);
    let new_index = this.todos.indexOf(todo); //getting the index of the clicked todo item
    console.log('index of todo =>', new_index);
    this.todos.splice(new_index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    
  }
  addTodo(todo: Todo){
    console.log('add todo ==>', todo);
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));

  }
  toggleTodo(todo: Todo){
    console.log('checked todo ==>', todo);
    let new_index = this.todos.indexOf(todo); //getting the index of the clicked todo item
    this.todos[new_index].active = !this.todos[new_index].active
    localStorage.setItem('todos', JSON.stringify(this.todos));

  }

}
