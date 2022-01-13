import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

import { DigipayrollServiceService } from '../digipayroll-service.service';

@Component({
  selector: 'app-adjustment-generate-report',
  templateUrl: './adjustment-generate-report.component.html',
  styleUrls: ['./adjustment-generate-report.component.css']
})
export class AdjustmentGenerateReportComponent implements OnInit {

  showtable:any;
  constructor(public DigipayrollServiceService: DigipayrollServiceService) { }
  selecallbtn:any;
  stafflist:any;
  uniquelist1:any;
  ngOnInit(): void {
    this.selecallbtn = false;
    this.selectone = false;

     
  this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
    debugger
    this.stafflist = data;

    const key = 'id'
    
    this.uniquelist1  = [...new Map(this.stafflist.map((item: { [x: string]: any; }) =>
    [(item[key]), item])).values()]
  });
  }

  selectone:any;
  selectALL(checked: boolean) { // pass true or false to check or uncheck all
    this.selecallbtn = true;
    this.selectone = false;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        inputs[i].checked = checked;
        // This way it won't flip flop them and will set them all to the same value which is passed into the function
      }
    }
  }

 


  stafflist1:any;
  uniquelist2:any;
public getemployee(id:any){
 
 
  this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
    debugger
    this.stafflist1 = data.filter(x => x.id==id && x.loanType!=null );

    const key = 'id'
    
    this.uniquelist2  = [...new Map(this.stafflist1.map((item: { [x: string]: any; }) =>
    [(item[key]), item])).values()]
  });

  this.selectone = true;;
}


  fileName = 'Approved Applicants Reports.xlsx';
  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('download');
    debugger
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    debugger

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  Showdata(){
    debugger
      this.showtable=1;   
  }

}
