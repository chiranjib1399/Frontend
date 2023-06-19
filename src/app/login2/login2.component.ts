import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  loginForm: FormGroup;
  dynamicControlNames: string[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm= this.fb.group({
      name: new FormControl('')
     })
  }

  submit(){
    const valuesArray = Object.values(this.loginForm.value);
    const lastEle = valuesArray[valuesArray.length-1];
    const elem = lastEle as string;
//   const value = this.loginForm.get('name').value;
//  if(value && !this.dynamicControlNames.includes(value)){
//   this.dynamicControlNames.push(value);
//   this.loginForm.addControl(value, new FormControl(''));
//   this.loginForm.get('name').setValue('')
//  }
 
if(elem && !this.dynamicControlNames.includes(elem)){
  this.dynamicControlNames.push(elem);
  this.loginForm.addControl(elem,new FormControl(''));
  this.loginForm.reset();
  this.loginForm.get(elem).setValue('good');
  this.loginForm.get(elem).disable()

}

}
  removeControl(controlName: string){
    const index = this.dynamicControlNames.indexOf(controlName);
  if (index !== -1) {
    this.dynamicControlNames.splice(index, 1); 
    this.loginForm.removeControl(controlName); 
  }

}
}