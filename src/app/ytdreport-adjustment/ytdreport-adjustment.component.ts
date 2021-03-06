import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ytdreport-adjustment',
  templateUrl: './ytdreport-adjustment.component.html',
  styleUrls: ['./ytdreport-adjustment.component.css']
})
export class YTDReportAdjustmentComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }

  result:any;
  ngOnInit(): void {
    this.GetPayGroup();
  }

  public GetPayGroup() {
    debugger
    this.DigipayrollServiceService.GetPayGroup().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }


  stafflist:any;
  uniquelist1:any;
public getemployee(){
 
 
  this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
    debugger
    this.stafflist = data.filter(x => x.emplyeeYear==this.year && x.loanType!=null );

    const key = 'id'
    
    this.uniquelist1  = [...new Map(this.stafflist.map((item: { [x: string]: any; }) =>
    [(item[key]), item])).values()]
  });
}



  year:any;
  fileName = 'Approved Applicants Reports.xlsx';
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

}
