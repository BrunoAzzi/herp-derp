import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  user;
  email = ""
  password = ""
  isLoggedIn = false;

  mailLogin = false;

  constructor(private service: AuthService) { }

  ngOnInit() {
    this.service.getUser().subscribe(user => {
      console.log(user)
      this.isLoggedIn = Boolean(user)
      this.user = user
    })
  }

  loginGoogle() {
    this.service.loginWithGoogle()
  }

  loginEmailAndPassword() {
    this.service.loginWithEmailAndPassword(this.email, this.password)
  }

  loginFacebook() {
    this.service.loginWithFacebook()
  }

  logout() {
    this.service.logout()
  }
}
