import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
@Component({
  selector: 'app-sssr3-report',
  templateUrl: './sssr3-report.component.html',
  styleUrls: ['./sssr3-report.component.css']
})
export class SSSR3ReportComponent implements OnInit {


  Month: any;
  Year: any;
  loader: any;

  govtattachment: any;
  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }
  govtlist: any;
  ngOnInit(): void {

    this.loader = false;

  }

  amount:any;
  employeelist: any;
  merged: any;
  results: any;
  uniquelist:any;
  sssnumber:any;
  public GetNewGovernmentRecords() {
    debugger
    this.DigipayrollServiceService.GetNewGovernmentRecords().subscribe(data => {
      debugger
      this.govtlist = data.filter(x => x.year == this.Year && x.month == this.Month && x.sbrorNumber == this.sssnumber );



      this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
        debugger
        this.employeelist = data;

        this.results = this.govtlist.map((val: { staffID: any; }) => {
          return Object.assign({}, val, this.employeelist.filter((v: { id: any; }) => v.id === val.staffID)[0]);
        });

        const key = 'id';
        
  
        this.uniquelist  = [...new Map(this.results.map((item: { [x: string]: any; }) =>
          [(item[key]), item])).values()]
     

       

        console.log('data', this.results)

      });

    })


  }


  fileName = 'R3 Report.xlsx';
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



}
