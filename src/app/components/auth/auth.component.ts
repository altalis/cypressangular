import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  logginUser: string = '';
  isLoggin: boolean = false;
  showMessage: boolean = false;
  message: string = '';

  params: any = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService
    ) { }

    clearParams() {
      this.params = {
        email: '',
        password: ''
      };
    }

    toastMessage(message: string) {
      this.showMessage = true;
      this.message = message;

      setTimeout(() => {
        this.showMessage = false;
        this.message = '';
      }, 3500);
    }

  submitLogin() {
    this.logginUser = this.params.email;

    this.authService.login(this.params).subscribe((response: any) => {

      if(response.status === 200) {
        this.toastMessage(response.message);
        this.isLoggin = true;
        this.clearParams();
      } else {
        this.toastMessage(response.message);
        this.logginUser = '';
      }//else
    });
  }

  submitLogout() {
    this.authService.logout({email: this.logginUser}).subscribe((response: any) => {
      this.toastMessage(response.message);

      if(response.status === 200) {
        this.toastMessage(response.message);
        this.isLoggin = false;
        this.logginUser = '';
        this.clearParams();
      } else {
        this.toastMessage(response.message);
      }
    });
  }

  ngOnInit(): void {
  }

}
