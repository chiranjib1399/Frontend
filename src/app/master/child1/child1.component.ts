import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

  @Input() dynamicData!: any;
  child1tochild2: string;
    constructor(private globalSerive: GlobalService, private router: Router) { }

  ngOnInit(): void {

  }
  sendToChild2(data: string){
 this.globalSerive.sendDataToChild2(data);
  }

}
