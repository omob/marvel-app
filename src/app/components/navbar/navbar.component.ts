import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'c-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showSideBarT = false;
  
  @Output('change') showSideBar = new EventEmitter<Boolean>();

  constructor() { }

  ngOnInit() {
  }

  onShowSideBar(){
    this.showSideBarT = !this.showSideBarT;
    this.showSideBar.emit(this.showSideBarT)
  }

}
