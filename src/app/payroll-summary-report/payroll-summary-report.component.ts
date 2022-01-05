import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';
import {NgxPaginationModule} from 'ngx-pagination';
@Component({
  selector: 'app-payroll-summary-report',
  templateUrl: './payroll-summary-report.component.html',
  styleUrls: ['./payroll-summary-report.component.css']
})
export class PayrollSummaryReportComponent implements OnInit {

  constructor() { }
  loader:any;
  showleaseforprint:any;
  ngOnInit(): void {
    this.loader = false;
    this.showleaseforprint = 0;
  }


  public attachmentsur1: any = [];
  public attachments3: any = [];

  public convetToPDF1() {
    debugger
    this.loader = true;
    var data: any = document.getElementById('downloadaplication');
    html2canvas(data).then(canvas => {
   
      var margin = 5;
      var imgWidth = 208
      // var pageHeight = 295 - 10 * margin;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var doc = new jsPDF('p', 'mm');
      var position = 0;
      while (heightLeft > 0) {

        const contentDataURL = canvas.toDataURL('image/png')
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);      
        heightLeft -= pageHeight;
      }
      doc.deletePage(1)
      doc.save('PayrollSummary.pdf');
      this.loader = false;
      var pdf1 = doc.output('blob');
      var file = new File([pdf1], "Application.pdf");
      let body = new FormData();
      debugger
      body.append('Dan', file);
      console.log('pdf', pdf1)
    }).then(() => {     
    });;
  }
  p: number = 1;
  
  
public pageChanged(even:any) 
{
   let fgdgfgd = even;

    this.p = even;
   }




  fileName = 'Payroll Summary.xlsx';
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



  
  public showpdf(){
    this.showleaseforprint = 1;
  }

}
