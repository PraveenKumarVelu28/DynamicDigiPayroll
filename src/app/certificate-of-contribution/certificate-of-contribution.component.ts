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

      const key="id"

      this.uniquelist  = [...new Map(this.stafflist.map((item: { [x: string]: any; }) =>
      [(item[key]), item])).values()]
    });





  }
  enddate: any;
  public getdate(event: any) {
    debugger
    this.enddate = event.target.value;

  }

  id:any
  public getCheckbocdetails(evn:any){
    this.id= evn.id
    this.getempdetails();

  }


 

  uniquelist:any;


  year:any;
  month:any;
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
  employeemonth:any;
  emplyeeYear:any;
  public getempdetails(){
  this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
    debugger
    this.employeelist = data.filter(x=>x.monthstaffid==this.id && x.employeeMonth==this.month && x.emplyeeYear==this.year);
    this.fullname = this.employeelist[0].staffname + this.employeelist[0].lastName
    this.sssrate=this.employeelist[0].monthlySSSRate,
    this.ss_ec = this.employeelist[0].monthlyss_ec,
    this.ss_er = this.employeelist[0].monthlyss_er,
   this.employeemonth = this.employeelist[0].employeeMonth,
   this.emplyeeYear = this.employeelist[0].emplyeeYear,

    this.paginigec = this.employeelist[0].monthlyPagibigRate/2,
     this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
     this.dob = this.employeelist[0].dob,
     this.joiningdate = this.employeelist[0].joiningDate,
     this.PhilHealth = this.employeelist[0].monthlyPhilihealth,
     this.PhilHealthEC = this.employeelist[0].monthlyPhilihealth/2,
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
