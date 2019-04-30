import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redemption-report',
  templateUrl: './redemption-report.component.html',
  styleUrls: ['./redemption-report.component.css']
})
export class RedemptionReportComponent implements OnInit {

  tableData:any[];

  constructor() { 
    
    this.tableData =  [
      { "product": "Airtime", "valuePoints": "500", "valueNaira": "200", "portalPartner": "Interswitch", "status": "Complete", "createdAt": new Date().toDateString() },
      { "product": "Transfer", "valuePoints": "10000", "valueNaira": "100", "portalPartner": "quickteller", "status": "Incomplete", "createdAt": new Date().toDateString() },
      { "product": "Voucher", "valuePoints": "5000", "valueNaira": "300", "portalPartner": "Shopright", "status": "Complete", "createdAt": new Date().toDateString() },
      { "product": "Airtime", "valuePoints": "2000", "valueNaira": "100", "portalPartner": "Glo", "status": "Incomplete", "createdAt": new Date().toDateString() },
     
    ];
    
  }

  ngOnInit() {
  }

}
