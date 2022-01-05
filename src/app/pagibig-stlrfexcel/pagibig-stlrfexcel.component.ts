import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-pagibig-stlrfexcel',
  templateUrl: './pagibig-stlrfexcel.component.html',
  styleUrls: ['./pagibig-stlrfexcel.component.css']
})
export class PagibigSTLRFExcelComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }

  Month:any;
  Year:any;
  Loan:any;
  Person:any;
  ngOnInit(): void {
    this.Month="jan";
    this.Year="2021";
    this.Loan="HDMF"
    this.Person="Admin"

    this.GetPayGroup();
  }

  result:any;
  public GetPayGroup() {
    debugger
    this.DigipayrollServiceService.GetPayGroup().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

  fileName = 'STLRF Report.xlsx';
  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  selectone:any;
  selecallbtn:any;
  
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

}
