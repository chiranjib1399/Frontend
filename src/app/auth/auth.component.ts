import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  setDataInLocal: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  setData(data: string){
  this.authService.setItem('auth', data)
  }

}
