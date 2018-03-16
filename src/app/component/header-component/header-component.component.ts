import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  showMenmenu = false;
  showWoMenmenu = false;
  

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }
  showMenMenuList(){
    this.showMenmenu = true;
  }
  hideMenMenuList(){
    this.showMenmenu = false;
  }
  showwoMenMenuList(){
    this.showWoMenmenu = true;
  }
  hideWoMenMenuList(){
    this.showWoMenmenu = false;
  }
onLogoutClick(){
  this.authService.logout();
  this.flashMessage.show('You are logged out',{cssClass:'alert-success',timeout:3000});
  this.router.navigate(['login']);
  return false;
}
}
