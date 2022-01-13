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
 
  constructor() { }
  showleaseforprint:any;
  ngOnInit(): void {
    this.showleaseforprint = 0;
    this.showtable1=0;   
    this.showtable2=0;   
  }




  fileName = 'Alphalist7.0.xlsx';
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


  showtable1:any;
  showtable2:any
  Showdata1(){
    debugger
      this.showtable1=1;   
      this.showtable2=0;   
  }

  Showdata2(){
    debugger
    this.showtable1=0;   
    this.showtable2=1;   
  }
}
