import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { DigipayrollServiceService } from '../digipayroll-service.service';

@Component({
  selector: 'app-er2',
  templateUrl: './er2.component.html',
  styleUrls: ['./er2.component.css']
})
export class ER2Component implements OnInit {
  showleaseforprint:any;
  constructor(public DigipayrollServiceService: DigipayrollServiceService) { }
  stafflist:any;
  employeeid:any;
  ngOnInit(): void {
    this.showleaseforprint = 0;
    
    this.DigipayrollServiceService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.deniminimis != null);
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


  public showpdf(){
    this.DigipayrollServiceService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x=>x.id==this.employeeid);
      this.emailid = this.stafflist[0].emailID
      this.EmployeeNo = this.stafflist[0].id
      this.PhilhealthNo = this.stafflist[0].philiHealth,
      this.role = this.stafflist[0].role,
      this.basesalary = this.stafflist[0].baseSal,
      this.dateofjoining = this.stafflist[0].joiningDate,
      this.fullname = this.stafflist[0].fullname,
      this.department = this.stafflist[0].department_name
    });
  
   

  }


  public showpdf1(){
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
