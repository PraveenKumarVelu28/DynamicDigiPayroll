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
  ngOnInit(): void {
    this.GetPayGroup();
    this.showleaseforprint = 0;
  
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

public getemployee(){
  this.DigipayrollServiceService.GetMyDetails().subscribe(data => {
    debugger
    this.stafflist = data.filter(x => x.deniminimis != null && x.paygroup==this.paygroup);
  });
}

  employeelist:any;
  uniquelist:any;
  uniquelist1:any;
  ssstotal:any;
  sum:any;
  sssec:any;;
  total:any;
  Year:any;
  fullname:any;
  payrolldate:any;
  datecovered:any;
  department:any;
  role:any;
  tin:any;
  PhilHealth:any;
  SSS:any;
  hdmf:any;
  deminimisamount:any;
  BaseSalary:any;
  lopamount:any;
  sssamount:any;
  philHealthContribution:any;
  pagBig:any;
  tax:any;
  netMonthSalary:any;
  deductions:any;
  startdate:any;
  GrossSalary:any;
  enddate:any;
  semimonthly:any;
  basicday:any;
  basichour:any;
  YearlySalary:any;
  deniminimis_amount:any;
  semi_deniminimis_amount:any;
  showleaseforprint:any;
  public showpdf(id:any){
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data.filter(x=>x.endyear==2022 && x.id == id);
      this.payrolldate = this.employeelist[0].enddate,
      this.startdate = this.employeelist[0].startdate; 
      this.enddate = this.employeelist[0].enddate,
      this.department = this.employeelist[0].department_name,
      this.role = this.employeelist[0].role,
      this.tin = this.employeelist[0].tiNNo,
      this.SSS = this.employeelist[0].ssSRate,
      this.PhilHealth = this.employeelist[0].philiHealth,
      this.hdmf = this.employeelist[0].pagiBigAccountNo,
      this.BaseSalary = this.employeelist[0].baseSalary, 
      this.deniminimis_amount = this.employeelist[0].deniminimis_amount
      this.deminimisamount = this.employeelist[0].deMINIMIS, 
      this.lopamount = this.employeelist[0].lopamount,
      this.sssamount = this.employeelist[0].contribution,
      this.philHealthContribution = this.employeelist[0].philHealthContribution,
      this.pagBig = this.employeelist[0].pagBig,
      this.tax = this.employeelist[0].tax,
      this.netMonthSalary = this.employeelist[0].netMonthSalary*24,
      this.semi_deniminimis_amount =  this.deniminimis_amount/2
          
      this.GrossSalary = this.employeelist[0].grossSalary,
      this.YearlySalary = this.employeelist[0].grossSalary*12
      this.semimonthly = Number(this.employeelist[0].grossSalary)/2
      this.deductions = this.semimonthly-this.employeelist[0].netMonthSalary,
      this.basicday = (this.employeelist[0].grossSalary)/30,
      this.basichour = (this.basicday)/8
      this.sum = 0;
      this.sssec = 0;
      for (let i = 0; i < this.employeelist.length; i++) {
        this.sum += this.employeelist[i].contribution;
      }
      for (let i = 0; i < this.employeelist.length; i++) {
        this.sssec += this.employeelist[i].ss_ec;
      }

      this.total = this.sum+this.sssec
     
      
   
     
      // this.ssstotal = SUM(this.employeelist.contribution)

    //   this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
    //     [(item[key]), item])).values()]
    // this.uniquelist1 =  this.uniquelist.filter((x: { month: any; })=>x.month==this.Month)
      //  this.uniquelist = [...new Set(data.map(item => item))];
     
  
    });
    this.showleaseforprint = 1;
  }



}
