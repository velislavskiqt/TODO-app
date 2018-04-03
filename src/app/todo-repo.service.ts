import { Injectable } from '@angular/core';
import TODO_LIST from './todo-mock-data';
import { Todo } from './todo.model';
import { LoggerService } from './logger.service';

@Injectable()
export class TodoRepoService {
private todos = TODO_LIST;

  constructor(private logger:LoggerService) { }

findAll () {
  return this.todos;
}
remove(todo: Todo) {
  this.todos.splice(
    this.todos.findIndex(item => item === todo), 1)
    this.logger.log(`Todo ${ todo.title } 'deleted'`);
 }
 create(todo: Todo) {
   this.todos.push(todo);
   this.logger.log(`Todo ${ todo.title } 'created'`);
 }
}
