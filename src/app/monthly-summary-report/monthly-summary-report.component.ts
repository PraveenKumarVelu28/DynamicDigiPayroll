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
Tax_Table_Starts_on:any;
  ngOnInit(): void {
    this.GetPayGroup();
  }

  public GetPayGroup() {
    debugger
    this.DigipayrollServiceService.GetPayGroup().subscribe(
      data => {
        debugger
        this.result = data;
      })
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
