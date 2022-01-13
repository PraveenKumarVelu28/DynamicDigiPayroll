import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { jsPDF } from "jspdf";
import { DatePipe } from '@angular/common';

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
  showleaseforprint:any;
  ngOnInit(): void {
   
    this.showleaseforprint = 0;
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
  sign:any;
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


  
  fullname:any;
  
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
