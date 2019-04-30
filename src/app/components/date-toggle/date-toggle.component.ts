import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'date-toggle',
  templateUrl: './date-toggle.component.html',
  styleUrls: ['./date-toggle.component.css']
})
export class DateToggleComponent implements OnInit {
  
  showDate:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
