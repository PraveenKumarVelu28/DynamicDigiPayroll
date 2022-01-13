import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { DatePipe } from '@angular/common';
import * as XLSX from 'xlsx';

import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-certificate-of-loan',
  templateUrl: './certificate-of-loan.component.html',
  styleUrls: ['./certificate-of-loan.component.css'],
  providers: [DatePipe]
})
export class CertificateOfLoanComponent implements OnInit {
  showsalary:any
  showcalamity:any
  showhdmfsalary:any
  showhdmfcalamity:any
  myDate:any;
  constructor(public DigiofficeService: DigipayrollServiceService, private datePipe: DatePipe){}
  stafflist:any;
  uniquelist:any;
  companylist:any;
  companyname:any;
  Address:any;
  ngOnInit(): void {
    this.myDate = new Date();
    this.showsalary = 0;
    this.showcalamity=0;
    this.showhdmfsalary=0;
    this.showhdmfcalamity=0;

    this.DigiofficeService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.deniminimis != null);

      const key="id"

      this.uniquelist  = [...new Map(this.stafflist.map((item: { [x: string]: any; }) =>
      [(item[key]), item])).values()]
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


amount:any;
employeelist: any;
merged: any;
results: any;
govtlist:any;
sssnumber:any;
fullname:any;
PhilHealth:any;
hdmf:any;
id:any;
public GetNewGovernmentRecords(id:any) {
  debugger
 this.id = id 


}




year:any;
month:any;
loantype:any;
Month:any;
Year:any;
DatePaid:any;
Amount:any;
  public showsalaryLoan(){

    this.DigiofficeService.GetNewGovernmentRecords().subscribe(data => {
      debugger
      this.govtlist = data.filter(x => x.year == this.year && x.month == this.month && x.staffID == this.id && x.type=="SSS Loan" );
      this.loantype =  this.govtlist[0].type,
      this.Month =  this.govtlist[0].month,
      this.Year =  this.govtlist[0].year,
      this.DatePaid = this.govtlist[0].datePaid,
      this.Amount = this.govtlist[0].amount

      this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
        debugger
        this.employeelist = data.filter(x=>x.monthstaffid==this.id);
        this.fullname = this.employeelist[0].staffname + this.employeelist[0].lastName
       
         this.DigiofficeService.GetCompanyDetails().subscribe(data => {
          debugger
          this.companylist = data
          this.companyname = this.companylist[0].companyName,
          this.Address = this.companylist[0].address
    
    
    
        })
    
      });
    });

    
  }



  public showcalamityLoan(){
      this.DigiofficeService.GetNewGovernmentRecords().subscribe(data => {
      debugger
      this.govtlist = data.filter(x => x.year == this.year && x.month == this.month && x.staffID == this.id && x.type=="SSS Calamity Loan" );
      this.loantype =  this.govtlist[0].type,
      this.Month =  this.govtlist[0].month,
      this.Year =  this.govtlist[0].year,
      this.DatePaid = this.govtlist[0].datePaid,
      this.Amount = this.govtlist[0].amount

      this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
        debugger
        this.employeelist = data.filter(x=>x.monthstaffid==this.id);
        this.fullname = this.employeelist[0].staffname + this.employeelist[0].lastName
       
         this.DigiofficeService.GetCompanyDetails().subscribe(data => {
          debugger
          this.companylist = data
          this.companyname = this.companylist[0].companyName,
          this.Address = this.companylist[0].address
    
    
    
        })
    
      });
    });
  }
  public showhdmfsalaryLoan(){
    this.DigiofficeService.GetNewGovernmentRecords().subscribe(data => {
      debugger
      this.govtlist = data.filter(x => x.year == this.year && x.month == this.month && x.staffID == this.id && x.type=="SSS Calamity Loan" );
      this.loantype =  this.govtlist[0].type,
      this.Month =  this.govtlist[0].month,
      this.Year =  this.govtlist[0].year,
      this.DatePaid = this.govtlist[0].datePaid,
      this.Amount = this.govtlist[0].amount

      this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
        debugger
        this.employeelist = data.filter(x=>x.monthstaffid==this.id);
        this.fullname = this.employeelist[0].staffname + this.employeelist[0].lastName
       
         this.DigiofficeService.GetCompanyDetails().subscribe(data => {
          debugger
          this.companylist = data
          this.companyname = this.companylist[0].companyName,
          this.Address = this.companylist[0].address
    
    
    
        })
    
      });
    });
  }

  public showhdmfcalamityLoan(){
    this.DigiofficeService.GetNewGovernmentRecords().subscribe(data => {
      debugger
      this.govtlist = data.filter(x => x.year == this.year && x.month == this.month && x.staffID == this.id && x.type=="SSS Calamity Loan" );
      this.loantype =  this.govtlist[0].type,
      this.Month =  this.govtlist[0].month,
      this.Year =  this.govtlist[0].year,
      this.DatePaid = this.govtlist[0].datePaid,
      this.Amount = this.govtlist[0].amount

      this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
        debugger
        this.employeelist = data.filter(x=>x.monthstaffid==this.id);
        this.fullname = this.employeelist[0].staffname + this.employeelist[0].lastName
       
         this.DigiofficeService.GetCompanyDetails().subscribe(data => {
          debugger
          this.companylist = data
          this.companyname = this.companylist[0].companyName,
          this.Address = this.companylist[0].address
    
    
    
        })
    
      });
    });
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
      doc.save('Certificate of Loan.pdf');
      
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
