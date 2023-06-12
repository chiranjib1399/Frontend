import { Component, Input, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  parentData: any;
  inputData: string = 'jsjsdjs';
  child2Data: string = 'Here data will show from Child2'
  constructor() { }

  ngOnInit(): void {
}

sendDataToChild(){
  console.log(this.inputData);
  
  this.parentData = this.inputData;
  console.log('eee');
}
receiveDataFromChild(data: string) {
  console.log('Received data from child:', data);
  this.child2Data = data;
  // Process the received data in the parent component as needed
}

}
