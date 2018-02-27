import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  showMenmenu = false;
  showWoMenmenu = false;
  

  constructor() { }

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

}
