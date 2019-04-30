import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  tableData:any[];

  constructor() { 
    this.tableData =  [
      { "fp": 0.2, "mb": 3, "mu": 1, "created_date": "21 Oct 2017", "updated_date": "26 Oct 2017" },
      { "fp": 0.12, "mb": 23, "mu": 2, "created_date": "21 Oct 2017", "updated_date": "26 Oct 2017" }
    
    ];
    
  }

  ngOnInit() {
  }

}
