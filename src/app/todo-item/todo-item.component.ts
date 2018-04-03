import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';


@Component({
  selector: 'td-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  @Output() comletionChanged = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  copletionChange() {
    this.comletionChanged.emit(this.todo);
  }

}
