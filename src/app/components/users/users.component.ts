import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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
   
    ];
    
  }

  ngOnInit() {
  }

}
