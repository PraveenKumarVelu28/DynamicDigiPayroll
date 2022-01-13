import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rfreport',
  templateUrl: './rfreport.component.html',
  styleUrls: ['./rfreport.component.css']
})
export class RFreportComponent implements OnInit {
  viewMode = 'tab1';

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
  year:any;
  month:any;
  loader:any;
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
 

  uniquelist:any;
  public showpdf(){
       
    this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data.filter(x=>x.employeeMonth==this.month && x.emplyeeYear==this.year);
      const key = 'monthstaffid'

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [(item[key]), item])).values()]
   
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
      doc.save('MCRF.pdf');
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
