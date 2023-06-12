import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private dataSubject: BehaviorSubject<string> = new BehaviorSubject<string>('Child Data');
  constructor() { }
  getData() {
    return this.dataSubject.asObservable();
  }
  sendDataToChild2(data: string){
    this.dataSubject.next(data);
  }
}
