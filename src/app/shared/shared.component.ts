import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToDoListComponent } from '../to-do-list/to-do-list.component';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openToDoList(){
    const dataRef = this.dialog.open(ToDoListComponent,{
      height:'auto',
      width:'963px',
      disableClose: true,
      autoFocus: false,
      data:{
        title: 'todo-list',
      }
    });
    dataRef.afterClosed().subscribe(res=>{
      console.log(res)
      
    })
  }

}
