import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-sssr3-report',
  templateUrl: './sssr3-report.component.html',
  styleUrls: ['./sssr3-report.component.css']
})
export class SSSR3ReportComponent implements OnInit {

  constructor() { }
  Month:any;
  Year:any;
  loader:any;
  ngOnInit(): void {
    this.Month="jan";
    this.Year="2021";
    this.loader = false;
  }


  fileName = 'R3 Report.xlsx';
  exportexcel(): void {
    this.loader = true;
    /* table id is passed over here */
    let element = document.getElementById('download');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
    this.loader = false;
  }



}
