import { Component, OnInit } from '@angular/core';
// import { userDetails } from '../../services/userdetail';
// import { UserdetailService } from '../../services/userdetail.service';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  // providers: [UserdetailService]
})
export class RegisterComponent implements OnInit {

// userData: Array<userDetails>;

  // constructor(private userdetailService:UserdetailService) { }

  name:String;
  username:String;
  email:String;
  password: String;

constructor(private validateService: ValidateService,
            private authService: AuthService,
            private flashMessage: FlashMessagesService,
            private router: Router) { }

onRegisterSubmit(){
  const User = {
    name:this.name,
    email:this.email,
    username: this.username,
    password: this.password
  }
// Required Fields
  if(!this.validateService.validateRegister(User)){
    this.flashMessage.show('please fill in all fields', {cssClass: 'alert-danger', timeout:3000});
    return false;
  }
  // Required Fields
  if(!this.validateService.validateEmail(User.email)){
    this.flashMessage.show('please use a valid email', {cssClass: 'alert-danger', timeout:3000});
    return false;
  }
  // Register User
  this.authService.registerUser(User).subscribe(data => {
    if(data.success){
      this.flashMessage.show('Registered Successfully', {cssClass: 'alert-success', timeout:3000});
      this.router.navigate(['/account']);
    }
    else{
       this.flashMessage.show('Error In Register', {cssClass: 'alert-danger', timeout:3000});
       this.router.navigate(['/register']);
    }
  });
}
  ngOnInit() {
    // normal post users
    // this.userdetailService.getUserDetails()
    // .subscribe(resUserData => this.userData = resUserData);
    // console.log(this.userData);
  }
// onSubmitAddUserDetails(userData: userDetails){
//     this.userdetailService.addUserDetails(userData)
//       .subscribe(resNewData => {
//       this.userData.push(resNewData);
     
      
//   });
// }


}
