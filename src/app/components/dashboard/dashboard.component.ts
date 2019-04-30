import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showSideBar:Boolean;

  constructor() { }

  ngOnInit() {
  }

  onShowSideBar(event: Boolean){
    this.showSideBar = event;
  }
}
