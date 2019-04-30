import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

  tableData:any[];

  constructor() { 
  }
  
  ngOnInit() {
    //static data
    this.tableData =  [
      { "role": "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" },
      { "role": "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" },
      { "role": "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Inactive" },
      { "role": "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" },
      { "role": "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" },
      { "role": "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Inactive" },
      { "role": "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" },
      { "role": "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Inactive" },
      { "role": "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" },
      { "role":  "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active"},
      { "role":  "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" },
      { "role":  "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Inactive" },
      { "role":  "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" },
      { "role":  "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Inactive" },
      { "role":  "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Inactive" },
      { "role":  "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Inactive" },
      { "role":  "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" },
      { "role":  "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" },
      { "role":  "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" },
      { "role":  "Super Admin", "currentSignIn": new Date().toDateString(), "lastSignIn": new Date().toDateString(), "email": "iswtester@yahoocom", "status": "Active" }
    ];
    
  }

}
