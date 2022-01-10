import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-biralphalist7',
  templateUrl: './biralphalist7.component.html',
  styleUrls: ['./biralphalist7.component.css']
})
export class Biralphalist7Component implements OnInit {
  showtable:any;
  constructor() { }
  showleaseforprint:any;
  ngOnInit(): void {
    this.showleaseforprint = 0;
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
