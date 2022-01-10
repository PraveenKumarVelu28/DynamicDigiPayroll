import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-monthly-summary-report',
  templateUrl: './monthly-summary-report.component.html',
  styleUrls: ['./monthly-summary-report.component.css']
})
export class MonthlySummaryReportComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }
result:any;
showtable:any;
Checked:any;
stafflist:any;
paygroup:any;
Tax_Table_Starts_on:any;
uniquelist:any;
stafflist1:any;
daysInMonth:any;
  ngOnInit(): void {
    var dt = new Date();

  
    this.GetPayGroup();
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data;
      const key = 'month';
      const key1 ='endyear';

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [item[key] , item])).values()];
      //  this.uniquelist = [...new Set(data.map(item => item))];
     this.stafflist1 =  this.uniquelist.filter((x: { endyear: number; })=>x.endyear==2022)
    });

    
    
  }

  public GetPayGroup() {
    debugger
    this.DigipayrollServiceService.GetPayGroup().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }
  employeelist:any;
  leavelist:any;
  BankAccountNumber:any;
 
  days:any;
  getDaysInMonth:any;


  month:any;
  year:any;
  basicday:any;
  basichour:any;

public getmonthlyreport(id:any){
  this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
    debugger
   
    this.employeelist = data.filter(x=>x.id==id);
    this.month = this.employeelist[0].month
    this.year = this.employeelist[0].endyear
    this.daysInMonth = new Date(this.year, this.month, 0).getDate();
    this.basicday = (this.employeelist[0].grossSalary)/this.daysInMonth
    this.basichour = (this.employeelist[0].grossSalary)/8
    
  });
  this.DigipayrollServiceService.GetBankDetails().subscribe(
    data => {
      debugger

      this.leavelist = data.filter(x => x.staffId == id);
      
        this.BankAccountNumber = this.leavelist[0].bankAccountNumber

    },
  );
}
 



  public getpaygrouplist(){
    this.DigipayrollServiceService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.paygroup == this.paygroup && x.deniminimis != null);
    });
  }
 
  fileName = 'Monthly Summary Report.xlsx';
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
