
import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { DigipayrollServiceService } from '../digipayroll-service.service';

@Component({
  selector: 'app-sssr5-report',
  templateUrl: './sssr5-report.component.html',
  styleUrls: ['./sssr5-report.component.css']
})
export class SSSR5ReportComponent implements OnInit {

  constructor(public DigipayrollServiceService: DigipayrollServiceService) { }
  Month:any;
  Year:any;
  Person:any;
  showleaseforprint:any;
  ngOnInit(): void {
    this.Month="jan";
    this.Year="2021";
    this.Person="Admin";
    this.showleaseforprint = 0;
  }

  employeelist:any;
  uniquelist:any;
  uniquelist1:any;
  ssstotal:any;
  sum:any;
  sssec:any;;
  total:any;
  public showpdf(){
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data.filter(x=>x.month==this.Month);
      
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
      doc.save('R5 Report.pdf');
      
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
