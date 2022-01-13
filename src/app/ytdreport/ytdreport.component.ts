import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-ytdreport',
  templateUrl: './ytdreport.component.html',
  styleUrls: ['./ytdreport.component.css']
})
export class YTDReportComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }
  result:any;
  stafflist:any;
  employeelist:any;
  uniquelist:any;
  ngOnInit(): void {
    this.GetPayGroup();
   
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data
      const key = 'emplyeeYear'

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [(item[key]), item])).values()]
   
       
       

    });
   
  }
  paygroup:any;
  public GetPayGroup() {
    debugger
    this.DigipayrollServiceService.GetPayGroup().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

  fileName = 'YTD Report.xlsx';
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

  Year:any;
  uniquelist1:any;
  Days:any;
public getemployee(Year:any){
  this.Year= Year
 
  this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
    debugger
    this.stafflist = data.filter(x => x.emplyeeYear==Year && x.paygroup==this.paygroup );

    const key = 'id'
    
    this.uniquelist1  = [...new Map(this.stafflist.map((item: { [x: string]: any; }) =>
    [(item[key]), item])).values()]
  });
}
year1:any;
employeelist2:any;
uniquelist3:any;
public getpaydetails(id:any){
  
  this.year1=String(this.Year)
  var date1 = new Date("01/01/" +   this.year1); 
  var date2 = new Date("31/12/" +   this.year1); 
  
    var Time = date2.getTime() - date1.getTime(); 
     this.Days = Time / (1000 * 3600 * 24);

    
    
  this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
    debugger
    this.employeelist2 = data.filter(x=>x.emplyeeYear==this.year1 && x.id==id);
    

    const key = 'id'
    
    this.uniquelist3  = [...new Map(this.employeelist2.map((item: { [x: string]: any; }) =>
    [(item[key]), item])).values()]
  });
}
 



}
