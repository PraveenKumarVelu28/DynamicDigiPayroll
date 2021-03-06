
import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { DigipayrollServiceService } from '../digipayroll-service.service';
@Component({
  selector: 'app-bir1601-c',
  templateUrl: './bir1601-c.component.html',
  styleUrls: ['./bir1601-c.component.css']
})
export class Bir1601CComponent implements OnInit {

  constructor(public DigipayrollServiceService: DigipayrollServiceService) { }
  showleaseforprint:any;
  month:any;
  ngOnInit(): void {
    this.showleaseforprint = 0;
    const d = new Date();
  this.month = d.getMonth()+1;
  }

  employeelist:any;
  uniquelist:any;
  uniquelist1:any;
  ssstotal:any;
  sum:any;
  sssec:any;;
  total:any;
  netMonthSalary:any;
  deductions:any;
  tax:any;
  public showpdf(){
    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data.filter(x=>x.month==this.month);
      
      this.sum = 0;
      this.netMonthSalary = 0;
      this.tax = 0;

      const key = 'staffname';
      const key1 = 'id'

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [(item[key]), item])).values()]
 

      for (let i = 0; i < this.uniquelist.length; i++) {
        this.sum += this.uniquelist[i].baseSalary;
      }
      for (let i = 0; i < this.employeelist.length; i++) {
        this.netMonthSalary += this.employeelist[i].netMonthSalary;
      }
      for (let i = 0; i < this.employeelist.length; i++) {
        this.tax += this.employeelist[i].tax;
      }

      this.deductions = this.sum-this.netMonthSalary
      
      
   
     
      // this.ssstotal = SUM(this.employeelist.contribution)

    //   this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
    //     [(item[key]), item])).values()]
    // this.uniquelist1 =  this.uniquelist.filter((x: { month: any; })=>x.month==this.Month)
      //  this.uniquelist = [...new Set(data.map(item => item))];
     
  
    });
    this.showleaseforprint = 1;
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
      doc.save('ER-2 Report.pdf');
      
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
