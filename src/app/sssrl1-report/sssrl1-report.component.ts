
import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { DigipayrollServiceService } from '../digipayroll-service.service';

@Component({
  selector: 'app-sssrl1-report',
  templateUrl: './sssrl1-report.component.html',
  styleUrls: ['./sssrl1-report.component.css']
})
export class SSSRL1ReportComponent implements OnInit {

  constructor(public DigipayrollServiceService: DigipayrollServiceService) { }

  Month:any;
  Year:any;
  Person:any;
  showleaseforprint:any;
  employeelist:any;
  uniquelist:any;
  uniquelist1:any;
  companylist:any;
  companyid:any;
  companyname:any;
  Address:any;
  ngOnInit(): void {
  
    this.showleaseforprint = 0;

  


  }

  
  month:any;
  year:any;
  MobileNumber:any;
  emailaddress:any;
  public showpdf(){
       
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data.filter(x=>x.employeeMonth==this.month && x.emplyeeYear==this.year);
      const key = 'monthstaffid'

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [(item[key]), item])).values()]
   

        this.showleaseforprint = 1;

        this.DigipayrollServiceService.GetCompanyDetails().subscribe(data => {
          debugger
          this.companylist = data
          this.companyid =  this.companylist[0].id,
          this.companyname = this.companylist[0].companyName,
          this.Address = this.companylist[0].address
          this.MobileNumber = this.companylist[0].mobileNumber,
          this.emailaddress = this.companylist[0].emailID
    
    
        })
    });
   
  }



  
  emailid:any;
  EmployeeNo:any;
  PhilhealthNo:any;
  basesalary:any;
  dateofjoining:any;
  role:any;
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
      var file = new File([pdf1], "R1-A Report.pdf");
      let body = new FormData();
      debugger
      body.append('Dan', file);
      console.log('pdf', pdf1)
    


    }).then(() => {
     
    });;
  }


}
