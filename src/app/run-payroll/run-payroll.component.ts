import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-run-payroll',
  templateUrl: './run-payroll.component.html',
  styleUrls: ['./run-payroll.component.css']
})
export class RunPayrollComponent implements OnInit {
  stafflist:any;
  constructor(public DigipayrollServiceService: DigipayrollServiceService) { }
  employeelist:any;
  ngOnInit(): void {


    this.DigipayrollServiceService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.deniminimis != null);
    });

  }


  ID1: any = [];
  startdate: any;
  LOPDays: any;
  NoOfDays: any
  public SelectAll() {
    debugger
    var date1 = new Date(this.startdate);
    var date2 = new Date(this.enddate);

    var Time = date2.getTime() - date1.getTime();
    let days: any = Time / (1000 * 3600 * 24);
    this.NoOfDays = days + 1;

    if (this.startdate == undefined || this.enddate == undefined) {
      Swal.fire('Please Select Start Date and End Date')
    }
    else if (this.startdate > this.enddate) {
      Swal.fire('End Date must be greater than start date');
    }
    else if (this.NoOfDays == 15 || this.NoOfDays == 30 || this.NoOfDays == 31 || this.NoOfDays == 28) {

      if (this.NoOfDays == 15) {
        if (this.stafflist.every((val: { checked: boolean; }) => val.checked == true)) {
          this.IntID = false;
          this.ID = [];
          this.stafflist.forEach((val: { checked: boolean; }) => { val.checked = false });
        }
        else {
          this.ID1 = [];
          debugger
          this.stafflist.forEach((val: { checked: boolean; }) => { val.checked = true });
          this.IntID = true;
          Swal.fire("Payroll Processing Completed");
          for (let i = 0; i < this.stafflist.length; i++) {
            debugger;
            this.ID1.push(this.stafflist[i].id);
            //this.EmployeeID =
            this.ID1[i];
            this.DigiofficeService.GetStaffLeavesForPayrollByDate(this.startdate, this.enddate, this.ID1[i]).subscribe(
              res => {
                debugger;
                if (res.length == 0) {
                  this.LOPDays = 0;
                  this.DigiofficeService.Get_Salary_Splitsfor15days(this.ID1[i], this.LOPDays, this.startdate, this.enddate).subscribe(
                    res => {
                      debugger;
                      this.StaffSalaryReports = res;
                      this.ID1 = [];
                      location.href = '#/Payrolldetails'
                    }
                  )

                } else {
                  this.LOPDays = res[0].noOfDays;
                  if (this.LOPDays <= 2) {
                    this.LOPDays = this.LOPDays;
                  }
                  else {
                    this.LOPDays = this.LOPDays - 2;
                  }
                  this.DigiofficeService.Get_Salary_Splitsfor15days(this.ID1[i], this.LOPDays, this.startdate, this.enddate).subscribe(
                    res => {
                      debugger;
                      this.StaffSalaryReports = res;
                      this.ID1 = [];
                      location.href = '#/Payrolldetails'
                    }
                  )
                }

              }


            )

          }


          // for (let i = 0; i < this.ID1.length; i++) {
          //   debugger;

          // }

        }
        // this.DigiofficeService.DeleteEmployeeSalary(1).subscribe(res => {
        
        // })
      }
      else {
        if (this.stafflist.every((val: { checked: boolean; }) => val.checked == true)) {
          this.IntID = false;
          this.ID = [];
          this.stafflist.forEach((val: { checked: boolean; }) => { val.checked = false });
        }
        else {
          this.ID1 = [];
          debugger
          this.stafflist.forEach((val: { checked: boolean; }) => { val.checked = true });
          this.IntID = true;
          Swal.fire("Payroll Processing Completed");
          for (let i = 0; i < this.stafflist.length; i++) {
            debugger;
            this.ID1.push(this.stafflist[i].id);
            //this.EmployeeID =
            this.ID1[i];
            this.DigiofficeService.GetStaffLeavesForPayrollByDate(this.startdate, this.enddate, this.ID1[i]).subscribe(
              res => {
                debugger;
                if (res.length == 0) {
                  this.LOPDays = 0;
                  this.DigiofficeService.Get_Salary_Splits(this.ID1[i], this.LOPDays, this.startdate, this.enddate).subscribe(
                    res => {
                      debugger;
                      this.StaffSalaryReports = res;
                      this.ID1 = [];
                      location.href = '#/Payrolldetails'
                    }
                  )

                } else {
                  this.LOPDays = res[0].noOfDays;
                  if (this.LOPDays <= 2) {
                    this.LOPDays = this.LOPDays;
                  }
                  else {
                    this.LOPDays = this.LOPDays - 2;
                  }
                  this.DigiofficeService.Get_Salary_Splits(this.ID1[i], this.LOPDays, this.startdate, this.enddate).subscribe(
                    res => {
                      debugger;
                      this.StaffSalaryReports = res;
                      this.ID1 = [];
                      location.href = '#/Payrolldetails'
                    }
                  )
                }

              }


            )

          }


          // for (let i = 0; i < this.ID1.length; i++) {
          //   debugger;

          // }

        }
        // this.DigiofficeService.DeleteEmployeeSalary(1).subscribe(res => {
        
        // })
      }


    }
    else {

      Swal.fire('Range for Payroll either 15 days or 30 days')
    }



  }

}
