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
  ngOnInit(): void {

    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.stafflist = data;
    });
  }
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
