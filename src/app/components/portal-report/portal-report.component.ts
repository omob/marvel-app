import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-report',
  templateUrl: './portal-report.component.html',
  styleUrls: ['./portal-report.component.css']
})
export class PortalReportComponent implements OnInit {
  
  tableData:any[];

  constructor() { 
    
    this.tableData =  [
      { "id": 1, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 2, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 3, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 4, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 5, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 6, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 7, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 8, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 9, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 10, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 11, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 12, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 12, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 14, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 15, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 16, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 17, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 18, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 19, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
      { "id": 20, "firstName": "James", "lastName": "Williams", "email": "iswtester@yahoocom", "phone": "08180000321", "lastLoginDate": "26 Oct 2017" },
     
    
    ];
    
  }

  ngOnInit() {
  }

}
