import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoggin: boolean = false;

  params: any = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService
    ) { }

  submitLogin() {
    this.authService.login(this.params).subscribe(response => {
      console.log('====> RESPONSE:', response);
    });
  }

  ngOnInit(): void {
  }

}
