import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-adjustment-generate-report',
  templateUrl: './adjustment-generate-report.component.html',
  styleUrls: ['./adjustment-generate-report.component.css']
})
export class AdjustmentGenerateReportComponent implements OnInit {

  showtable:any;
  constructor() { }
  selecallbtn:any;
  ngOnInit(): void {
    this.selecallbtn = false;
    this.selectone = false;
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

  showone(){
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
