import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-preliminary-report',
  templateUrl: './preliminary-report.component.html',
  styleUrls: ['./preliminary-report.component.css']
})
export class PreliminaryReportComponent implements OnInit {
  selecallbtn:any;
  constructor() { }

  ngOnInit(): void {
    this.selecallbtn = false;
    this.selectone = false;
  }
  loader:any;
  
  fileName = 'Preliminary Report.xlsx';
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

}
