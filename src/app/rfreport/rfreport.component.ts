import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { DigipayrollServiceService } from '../digipayroll-service.service';
@Component({
  selector: 'app-rfreport',
  templateUrl: './rfreport.component.html',
  styleUrls: ['./rfreport.component.css']
})
export class RFreportComponent implements OnInit {
  loader:any;
  employeelist:any;
  constructor(public DigipayrollServiceService: DigipayrollServiceService) { }
  stafflist:any;
  uniquelist:any;
  ngOnInit(): void {
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data;
      const key = 'ID';

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [item[key], item])).values()];

      
      //  this.uniquelist = [...new Set(data.map(item => item))];
     
    });

  }

  sum:any;
  sssec:any;
  total:any;
  public showpdf(){
    
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.stafflist = data.filter(x=>x.month==this.Month);
      this.sum = 0;
      this.sssec = 0;
      for (let i = 0; i < this.employeelist.length; i++) {
        this.sum += this.employeelist[i].contribution;
      }
      for (let i = 0; i < this.employeelist.length; i++) {
        this.sssec += this.employeelist[i].ss_ec;
      }

      this.total = this.sum+this.sssec
    });
  }
  Month:any;

  fileName = 'RF-1 Summary.xlsx';
  exportexcel(): void {
    this.loader = true;
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
    this.loader = false;
  }
}
