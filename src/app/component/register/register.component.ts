import { Component, OnInit } from '@angular/core';
import { userDetails } from '../../services/userdetail';
import { UserdetailService } from '../../services/userdetail.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserdetailService]
})
export class RegisterComponent implements OnInit {

userData: Array<userDetails>;

  constructor(private userdetailService:UserdetailService) { }

  ngOnInit() {
    this.userdetailService.getUserDetails()
    .subscribe(resUserData => this.userData = resUserData);
    console.log(this.userData);
  }
onSubmitAddUserDetails(userData: userDetails){
    this.userdetailService.addUserDetails(userData)
      .subscribe(resNewData => {
      this.userData.push(resNewData);
     
      
  });
}
}
