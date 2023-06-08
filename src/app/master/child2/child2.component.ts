import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/shared/global.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {

  @Output() sendDataToParent: EventEmitter<string> = new EventEmitter<string>();
  childData: string;
  showData: string;
  constructor(private globalSerive: GlobalService) { }

  ngOnInit(): void {
  
  }
  sendToParent(data: string){
    this.sendDataToParent.emit(data);
  }
  receiveDataFromChild(){
    this.globalSerive.getData().subscribe((res:any)=>{
      console.log(res);
      this.showData= res;
    })
  }

}
