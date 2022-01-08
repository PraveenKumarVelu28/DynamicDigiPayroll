import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';

import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-certificate-of-contribution',
  templateUrl: './certificate-of-contribution.component.html',
  styleUrls: ['./certificate-of-contribution.component.css'],
  providers: [DatePipe]
})
export class CertificateOfContributionComponent implements OnInit {
  showsss:any;
  showPhilhealth:any;
  showPagibig:any;
  constructor(public DigiofficeService: DigipayrollServiceService, private datePipe: DatePipe) {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.myDate = new Date();
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
    this.showsss = 0;
    this.showPhilhealth=0;
    this.showPagibig=0;
    debugger

    this.DigiofficeService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.deniminimis != null);
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
        })
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
  Payrollvis:any;
  StaffSalaryReports: any;
  public ID: any = [];
  public getCheckbocdetails(evn: any) {
    debugger
    let temp: any = evn;
    this.temp = Object.entries(temp);
    debugger
    if (this.temp.every((val: { checked: boolean; }) => val.checked == true)) {
      this.IntID = false;
      this.ID = [];
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = false });
      this.IntID = false;
    }
    else {
      debugger;

      //  this.ID = [];
      debugger
      this.temp.forEach((val: { checked: boolean; }) => { val.checked = true });
      this.IntID = true;
      this.ID.push(evn.id);

     
        debugger;
        this.EmployeeID = this.ID[0];
        this.DigiofficeService.GetStaffLeavesForPayrollByDate(this.startdate, this.enddate, this.ID[0]).subscribe(
          res => {
            debugger;
            if (res.length == 0) {
              this.LOPDays = 0;
              this.DigiofficeService.Get_Salary_Splits(this.ID[0], this.LOPDays, this.startdate, this.enddate).subscribe(
                res => {
                  debugger;
                  this.StaffSalaryReports = res;
                     this.getempdetails(evn)
                  Swal.fire("Payroll Processing Completed");
                  this.Payrollvis = true
                }
              )

            } else {

              this.LOPDays = res[0].noOfDays;
              this.DigiofficeService.GetStaffLeavesForPayrollByDate(this.startdate, this.enddate, this.ID1[0]).subscribe(
                res1 => {
                  debugger;
                  this.PrevLOPDays = res1[0].noOfDays;
                  if (this.LOPDays > 2) {
                    if (this.PrevLOPDays == 0) {
                      this.LOPDays = this.LOPDays;
                      this.DigiofficeService.Get_Salary_Splits(this.ID[0], this.LOPDays, this.startdate, this.enddate).subscribe(
                        res => {
                          debugger;
                          this.StaffSalaryReports = res;
                          this.getempdetails(evn)
                          Swal.fire("Payroll Processing Completed");

                          this.ID = [];
                          this.Payrollvis = true;
                        }
                      )
                    }
                    else if (this.PrevLOPDays != 0) {
                      let ActualLOPDays = Number(this.LOPDays) + Number(this.PrevLOPDays);
                      if (ActualLOPDays > 4) {
                        this.LOPDays = Number(ActualLOPDays) - 4;
                        this.DigiofficeService.Get_Salary_Splits(this.ID[0], this.LOPDays, this.startdate, this.enddate).subscribe(
                          res => {
                            debugger;
                            this.StaffSalaryReports = res;
                               this.getempdetails(evn)
                            Swal.fire("Payroll Processing Completed");
                            this.ID = [];
                            this.Payrollvis = true;
                          }
                        )
                      }
                    }
                  }

                  else {
                    if (this.LOPDays <= 2 || this.PrevLOPDays == 0) {
                      this.LOPDays = 0;
                      this.DigiofficeService.Get_Salary_Splits(this.ID[0], this.LOPDays, this.startdate, this.enddate).subscribe(
                        res => {
                          debugger;
                          this.StaffSalaryReports = res;
                          this.getempdetails(evn)
                          Swal.fire("Payroll Processing Completed");
                          this.ID = [];
                          this.Payrollvis = true
                        }
                      )
                    }
                  }

                }
              )

            }

          }

        )
      

    }
    
  }

  sssrate:any;
  ss_ec:any;
  ss_er:any;
  startmonth:any;
  endmonth:any;
  startyear:any;
  endyear:any;
  myDate:any;
  companylist:any;
  companyname:any;
  Address:any;
  fullname:any;
  paginigec:any;
  dob:any;
  PhilHealthEC:any;
  joiningdate:any;
  PhilHealth:any;
  public getempdetails(evn:any){
  this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
    debugger
    this.employeelist = data.filter(x=>x.id==evn.id && x.startdate1==this.startdate && x.enddate1==this.enddate);
    this.fullname = this.employeelist[0].staffname + this.employeelist[0].lastName
    this.sssrate=this.employeelist[0].contribution,
    this.ss_ec = this.employeelist[0].ss_ec,
    this.ss_er = this.employeelist[0].ss_er,
    this.startmonth = this.employeelist[0].startmonth,
    this.endmonth = this.employeelist[0].endmonth,
    this.startyear = this.employeelist[0].startyear,
    this.endyear = this.employeelist[0].endyear,
    this.paginigec = this.employeelist[0].pagBig/2,
     this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
     this.dob = this.employeelist[0].dob,
     this.joiningdate = this.employeelist[0].joiningDate,
     this.PhilHealth = this.employeelist[0].philHealth,
     this.PhilHealthEC = this.employeelist[0].philHealthContribution/2,
     this.DigiofficeService.GetCompanyDetails().subscribe(data => {
      debugger
      this.companylist = data
      this.companyname = this.companylist[0].companyName,
      this.Address = this.companylist[0].address



    })

  });
}
  

sign:any;
department:any;
signname:any;
stafflist1:any;
public getsign(){
  this.DigiofficeService.GetMyDetails().subscribe(data => {
    debugger
    this.stafflist1 = data.filter(x => x.department_name == this.sign);
    this.signname = this.stafflist1[0].fullname
  });
}



  public showssspdf(){

 
    this.showsss = 1;
    this.showPhilhealth = 0;
    this.showPagibig = 0;
  }

  public showphilhealthpdf(){
    this.showPhilhealth = 1;
    this.showsss = 0;
    this.showPagibig = 0;
  }
  public showpagibigpdf(){
    this.showPagibig = 1;
    this.showPhilhealth = 0;
    this.showsss = 0;
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
      doc.save('PayrollSummary.pdf');
      
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
