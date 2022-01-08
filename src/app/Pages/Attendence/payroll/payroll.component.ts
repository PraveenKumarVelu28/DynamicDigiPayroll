import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {
  constructor(public DigiofficeService: DigipayrollServiceService, public router: Router) {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  stafflist: any;
  term: any;
  value: any;
  employeelist:any;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();
  ngOnInit(): void {
    debugger

    this.DigiofficeService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.deniminimis != null);
    });


    this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data;
    });



  }
  enddate: any;
  public getdate(event: any) {
    debugger
    this.enddate = event.target.value;

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
        this.DigiofficeService.DeleteEmployeeSalary(1).subscribe(res => {
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
        })
      }


    }
    else {

      Swal.fire('Range for Payroll either 15 days or 30 days')
    }



  }

  EmployeeID: any
  temp: any;
  IntID: any
  PrevLOPDays: any;
  StaffSalaryReports: any;
  public ID: any = [];
  // public getCheckbocdetails(evn: any) {
  //   debugger
  //   let temp: any = evn;
  //   this.temp = Object.entries(temp);
  //   debugger
  //   if (this.temp.every((val: { checked: boolean; }) => val.checked == true)) {
  //     this.IntID = false;
  //     this.ID = [];
  //     this.temp.forEach((val: { checked: boolean; }) => { val.checked = false });
  //     this.IntID = false;
  //   }
  //   else {
  //     debugger;

  //     //  this.ID = [];
  //     debugger
  //     this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
  //     this.IntID = true;
  //     this.ID.push(evn.id);

  //     for (let i = 0; i < this.ID.length; i++) {
  //       debugger;
  //       this.EmployeeID = this.ID[i];
  //       this.DigiofficeService.GetStaffLeavesForPayroll(this.MonthID, 2021, this.EmployeeID).subscribe(
  //         res => {
  //           debugger;
  //           if (res.length == 0) {
  //             this.LOPDays = 0;
  //             this.DigiofficeService.GetSalary(this.EmployeeID, this.LOPDays, this.MonthID, 2021).subscribe(
  //               res => {
  //                 debugger;
  //                 this.StaffSalaryReports = res;
  //                 Swal.fire("Payroll Processing Completed");
  //                 this.Payrollvis = true
  //               }
  //             )

  //           } else {

  //             this.LOPDays = res[0].noOfDays;
  //             this.DigiofficeService.GetStaffLeavesForPayroll(this.MonthID, 2021, this.EmployeeID).subscribe(
  //               res1 => {
  //                 debugger;
  //                 this.PrevLOPDays = res1[0].noOfDays;
  //                 if (this.LOPDays > 2) {
  //                   if (this.PrevLOPDays == 0) {
  //                     this.LOPDays = this.LOPDays;
  //                     this.DigiofficeService.GetSalary(this.EmployeeID, this.LOPDays, this.MonthID, 2021).subscribe(
  //                       res => {
  //                         debugger;
  //                         this.StaffSalaryReports = res;
  //                         Swal.fire("Payroll Processing Completed");

  //                         this.ID = [];
  //                         this.Payrollvis = true;
  //                       }
  //                     )
  //                   }
  //                   else if (this.PrevLOPDays != 0) {
  //                     let ActualLOPDays = Number(this.LOPDays) + Number(this.PrevLOPDays);
  //                     if (ActualLOPDays > 4) {
  //                       this.LOPDays = Number(ActualLOPDays) - 4;
  //                       this.DigiofficeService.GetSalary(this.EmployeeID, this.LOPDays, this.MonthID, 2021).subscribe(
  //                         res => {
  //                           debugger;
  //                           this.StaffSalaryReports = res;
  //                           Swal.fire("Payroll Processing Completed");
  //                           this.ID = [];
  //                           this.Payrollvis = true;
  //                         }
  //                       )
  //                     }
  //                   }
  //                 }

  //                 else {
  //                   if (this.LOPDays <= 2 || this.PrevLOPDays == 0) {
  //                     this.LOPDays = 0;
  //                     this.DigiofficeService.GetSalary(this.EmployeeID, this.LOPDays, this.MonthID, 2021).subscribe(
  //                       res => {
  //                         debugger;
  //                         this.StaffSalaryReports = res;
  //                         Swal.fire("Payroll Processing Completed");
  //                         this.ID = [];
  //                         this.Payrollvis = true
  //                       }
  //                     )
  //                   }
  //                 }

  //               }
  //             )

  //           }

  //         }

  //       )
  //     }

  //   }
  // }


  
}
