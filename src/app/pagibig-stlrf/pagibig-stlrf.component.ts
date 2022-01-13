import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pagibig-stlrf',
  templateUrl: './pagibig-stlrf.component.html',
  styleUrls: ['./pagibig-stlrf.component.css'],
  providers: [DatePipe]
})
export class PagibigSTLRFComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute: ActivatedRoute, private datePipe: DatePipe) { }

  Month:any;
  Year:any;
  Loan:any;
  Person:any;
  showleaseforprint:any;
  loader:any;
  myDate:any;
  ngOnInit(): void {

    this.showleaseforprint = 0;
    this.loader=false;

    this.myDate = new Date();
  }


  fullname:any;
  sign:any;
  department:any;
  signname:any;
  stafflist1:any;
  public getsign(){
    this.DigipayrollServiceService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist1 = data.filter(x => x.department_name == this.sign);
      this.signname = this.stafflist1[0].fullname
    });
  }


  employeelist:any;
  uniquelist:any;
  MonthlyAdjustment:any;
  RemainingAmount:any;
  paidamount:any;
  Month_Name:any;
  EmplyeeYear:any;
  LoanType:any;
  companylist:any;
  companyname:any;
  Address:any;
  companyid:any;
  MobileNumber:any;
  public showpdf(){
    this.showleaseforprint = 1;
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data.filter(x=>x.employeeMonth==this.Month && x.emplyeeYear==this.Year && x.loanType==this.Loan);
      const key = 'monthstaffid'

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [(item[key]), item])).values()]

        this.MonthlyAdjustment = 0;
        for (let i = 0; i < this.uniquelist.length; i++) {
          this.MonthlyAdjustment += this.uniquelist[i].monthlyAdjustment;
        }


        this.LoanType=this.uniquelist[0].loanType
      
       this.paidamount=this.uniquelist[0].paidamount,
        this.RemainingAmount=this.uniquelist[0].remainingAmount
       this.Month_Name==this.uniquelist[0].Month_Name,
       this.EmplyeeYear=this.uniquelist[0].EmplyeeYear
       this.DigipayrollServiceService.GetCompanyDetails().subscribe(data => {
        debugger
        this.companylist = data
        this.companyid = this.companylist[0].id,
        this.companyname = this.companylist[0].companyName,
        this.Address = this.companylist[0].address
       this.MobileNumber = this.companylist[0].address
  
  
      })



      });
  }


  public convetToPDF1() {
    debugger
   this.loader=true
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
      doc.save('STLRF Report.pdf');
      this.loader=false
      var pdf1 = doc.output('blob');
      var file = new File([pdf1], "Application.pdf");
      let body = new FormData();
      debugger
      body.append('Dan', file);
      console.log('pdf', pdf1)
    


    }).then(() => {
     
    });;
  }
}
