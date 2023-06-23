import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit ,OnDestroy {

  @Output() sendDataToParent: EventEmitter<string> = new EventEmitter<string>();
  childData: string;
  showData: string;
  time: Date;
  interval : number;
  constructor(private globalSerive: GlobalService, private router:Router) { }

  ngOnInit(): void {
  this.interval=window.setInterval(()=>{
    this.time = new Date();
    console.log(this.time);
    
  }, 1000)
  //console.log(this.timerInterval);
  
  }
  sendToParent(data: string){
    this.sendDataToParent.emit(data);
    this.router.navigate(['login'])

  }
  receiveDataFromChild(){ 
    this.globalSerive.getData().pipe(takeUntil(this.globalSerive.destroyComponent(this))).subscribe((res:any)=>{
      console.log(res);
      this.showData= res;
    })
  }
  public subcription: Array<any> = [];
  ngOnDestroy(){
   console.log('After destroy1', this.showData);
  this.subcription.forEach(data=>{
  data.next(undefined);
  data.complete();
  })
  console.log('After destroy2', this.showData);

 //clearInterval(this.interval);
  }

}
