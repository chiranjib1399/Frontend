import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ToDoListComponent>
  ) { }

  ngOnInit(): void {
  }

  todoItems: TodoItem[] = [];
  newItemText = '';
  
  closepop(){
    this.ref.close('Closed....')
  }

  addTodoItem(): void {
    if (this.newItemText.trim() === '') {
      return; // Don't add empty items
    }

    const newId = this.todoItems.length > 0 ? this.todoItems[this.todoItems.length - 1].id + 1 : 1;
    const newItem: TodoItem = {
      id: newId,
      text: this.newItemText,
      completed: false
    };

    this.todoItems.push(newItem);
    this.newItemText = '';
  }

  removeTodoItem(itemId: number): void {
    this.todoItems = this.todoItems.filter(item => item.id !== itemId);
  }

  toggleCompletion(itemId: number): void {
    const item = this.todoItems.find(item => item.id === itemId);
    if (item) {
      item.completed = !item.completed;
    }
  }

}
