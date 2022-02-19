import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;//taking input from parent component todos
  @Input() i: number; 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter(); //emitting/passing to parent component todos
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log('btn clicked');
  }
  oncheckboxClick(todo: Todo){
    this.todoCheckbox.emit(todo);
  }

}
