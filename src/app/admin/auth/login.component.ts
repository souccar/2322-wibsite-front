import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('loginForm') loginForm: NgForm;
  emailModel = 'demo@vien.com';
  passwordModel = 'demovien1122';

  buttonDisabled = false;
  buttonState = '';
  onSubmit(): void {
    // if (this.loginForm.valid) {
    //   if (this.buttonDisabled) {

    //     this.buttonDisabled = true;
    //     this.buttonState = 'show-spinner';
    //     this.authService.signIn(this.loginForm.value).then(() => {
    //       this.router.navigate([environment.adminRoot]);
    //     }).catch((error) => {
    //       this.buttonDisabled = false;
    //       this.buttonState = '';
    //       this.notifications.create('Error', error.message, NotificationType.Bare, {
    //         theClass: 'outline primary',
    //         timeOut: 6000,
    //         showProgressBar: false
    //       });
    //     });
    //   }
    // }
  }
}
