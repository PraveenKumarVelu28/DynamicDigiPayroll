import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-bir-annualization',
  templateUrl: './bir-annualization.component.html',
  styleUrls: ['./bir-annualization.component.css']
})
export class BirAnnualizationComponent implements OnInit {
 
  showtable:any;
  constructor() { }
  showleaseforprint:any;

  
  ngOnInit(): void {
    this.showleaseforprint = 0;
  }
  fileName = 'Monthly Summary Report.xlsx';
  exportexcel(): void {
    this.showtable=1;  
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
    this.showtable=0;  
  }

  Showdata(){
    debugger
      this.showtable=1;   
  }


}
