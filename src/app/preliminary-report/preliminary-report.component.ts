import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';

import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
@Component({
  selector: 'app-preliminary-report',
  templateUrl: './preliminary-report.component.html',
  styleUrls: ['./preliminary-report.component.css']
})
export class PreliminaryReportComponent implements OnInit {
  selecallbtn:any;
  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }

  result:any;
  Company_logo:any;
  employeelist:any;
  uniquelist:any;
  ngOnInit(): void {
    this.GetPayGroup();
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data;
      const key = 'startdate';

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [item[key], item])).values()];
      //  this.uniquelist = [...new Set(data.map(item => item))];
     
    });


  }

  employeelist1:any;
  public getemployeelist(startdate:any,enddate:any){
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist1 = data.filter(x=>x.startdate==startdate && x.enddate==enddate);
    }
    )
  }
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
  enddate:any;
  id:any;
  GrossSalary:any;
  deniminimis_amount:any;
  semimonthly:any;
  basicday:any;
  basichour:any;
  public getpayslip(id:any){
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.id = id;
      this.employeelist1 = data.filter(x=>x.id==id);
      this.showleaseforprint==1
      this.fullname =  this.employeelist1[0].staffname + this.employeelist1[0].lastName ,
      this.payrolldate = this.employeelist1[0].enddate,
      this.startdate = this.employeelist1[0].startdate; 
      this.enddate = this.employeelist1[0].enddate,
      this.department = this.employeelist1[0].department_name,
      this.role = this.employeelist1[0].role,
      this.tin = this.employeelist1[0].tiNNo,
      this.SSS = this.employeelist1[0].ssSRate,
      this.PhilHealth = this.employeelist1[0].philiHealth,
      this.hdmf = this.employeelist1[0].pagiBigAccountNo,
      this.BaseSalary = this.employeelist1[0].baseSalary, 
      this.deniminimis_amount = this.employeelist1[0].deniminimis_amount
      this.deminimisamount = this.employeelist1[0].deMINIMIS, 
      this.lopamount = this.employeelist1[0].lopamount,
      this.sssamount = this.employeelist1[0].contribution,
      this.philHealthContribution = this.employeelist1[0].philHealthContribution,
      this.pagBig = this.employeelist1[0].pagBig,
      this.tax = this.employeelist1[0].tax,
      this.netMonthSalary = this.employeelist1[0].netMonthSalary,
    
      this.GrossSalary = this.employeelist1[0].grossSalary,
      this.semimonthly = Number(this.employeelist1[0].grossSalary)/2
      this.deductions = this.semimonthly-this.employeelist1[0].netMonthSalary,
      this.basicday = (this.employeelist1[0].grossSalary)/30,
      this.basichour = (this.basicday)/8



     



    }
    )
  }

  public GetPayGroup() {
    debugger
    this.DigipayrollServiceService.GetPayGroup().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

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

  public convetToPDF1() {
    debugger
   
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
      doc.save('Payslip.pdf');
      
      var pdf1 = doc.output('blob');
      var file = new File([pdf1], "Application.pdf");
      let body = new FormData();
      debugger
      body.append('Dan', file);
      console.log('pdf', pdf1)
    


    }).then(() => {
     
    });;
  }


  files: File[] = [];
  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.uploadattachments();
    console.log("content", this.files);
  }


  onRemove(event:any)
  {
debugger
console.log(event);
this.files.splice(this.files.indexOf(event),1);
  }

  public uploadattachments() {
    debugger
    this.DigipayrollServiceService.AttachmentsUpload(this.files).subscribe(res => {
      debugger
      this.Company_logo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }



  showleaseforprint:any;
  public showpdf(){
    this.showleaseforprint = 1;
  }


}
