import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-biralphalist6',
  templateUrl: './biralphalist6.component.html',
  styleUrls: ['./biralphalist6.component.css']
})
export class Biralphalist6Component implements OnInit {
 
  showtable:any;
  constructor() { }
  showleaseforprint:any;
  ngOnInit(): void {
    this.showleaseforprint = 0;
    this.showtable1=0;
    this.showtable2=0;
    this.showtable3=0;
    this.showtable4=0;

  }

  public showpdf(){
    this.showleaseforprint = 1;
  }
 


  fileName = 'AlphaList 6.1.xlsx';
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
  showtable2:any;
  showtable3:any;
  showtable4:any;
  Showdata1(){
    debugger
      this.showtable1=1;  
      this.showtable2=0;  
      this.showtable3=0;  
      this.showtable4=0  
  }
  Showdata2(){
    debugger
    this.showtable1=0;  
    this.showtable2=1;  
    this.showtable3=0;  
    this.showtable4=0    
  }
  Showdata3(){
    debugger
    this.showtable1=0;  
    this.showtable2=0;  
    this.showtable3=1;  
    this.showtable4=0    
  }
  Showdata4(){
    debugger
    this.showtable1=0;  
    this.showtable2=0;  
    this.showtable3=0;  
    this.showtable4=1;   
  }
}
