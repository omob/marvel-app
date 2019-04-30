import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input('showSideBar') showSideBar;

  hideContentSubNav= true;
  hideUserSubNav= true;
  hideReportingSubNav= true;


  constructor() { 
    // console.log(this.showSideBar)
  }

  ngOnInit() {
  }

}
