import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rf1-pdf',
  templateUrl: './rf1-pdf.component.html',
  styleUrls: ['./rf1-pdf.component.css']
})
export class RF1PDFComponent implements OnInit {
  showleaseforprint:any;
  loader:any;
  constructor(public DigiofficeService: DigipayrollServiceService, public router: Router) { }
  stafflist:any;
  ngOnInit(): void {
    this.showleaseforprint = 0;
    this.loader=false
   
  }



  employeelist:any;
  uniquelist:any;
  public showpdf(){
       
    this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data.filter(x=>x.employeeMonth==this.month && x.emplyeeYear==this.Year);
      const key = 'monthstaffid'

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [(item[key]), item])).values()]
   
    });
    this.showleaseforprint = 1;
  }


  fullname:any;
  sign:any;
  department:any;
  signname:any;
  stafflist1:any;
  Year:any;
  month:any;
  public getsign(){
    this.DigiofficeService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist1 = data.filter(x => x.department_name == this.sign);
      this.signname = this.stafflist1[0].fullname
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
      doc.save('RF-1.pdf');
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
