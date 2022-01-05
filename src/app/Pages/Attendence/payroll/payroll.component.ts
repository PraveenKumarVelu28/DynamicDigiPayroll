import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {
  selectdata:any;
  details: any;
  id:any;
  constructor(private DigiPayrollServiceService:DigipayrollServiceService) { }

  ngOnInit(): void {
    this.GetPayroll();
  }
    
  public GetPayroll() {
    debugger
    this.DigiPayrollServiceService.GetPayroll().subscribe(data=>{
      debugger
      this.selectdata=data ;
     })
  }

  public Ondelete(id:any) {
    this.DigiPayrollServiceService.DeletePayroll(id).subscribe(
      data => {
        debugger
        this.GetPayroll();
        Swal.fire('Deleted');
      }
    )
  }


  payroll(){
    Swal.fire('Payroll Run Successfully')
    location.reload();
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
      doc.save('BankAdvice.pdf');
    
      var pdf1 = doc.output('blob');
      var file = new File([pdf1], "Application.pdf");
      let body = new FormData();
      debugger
      body.append('Dan', file);
      console.log('pdf', pdf1)
    


    }).then(() => {
     
    });;
  }


  GetId(id: any) {
    this.id = id
  }

  update() {
    debugger
    if (this.id== null || this.id==undefined) {
      Swal.fire('Please Select the Record to Modify');
    }

    else {
      location.href="#/PayRollForm/"+ this.id;
    }
  }
}
