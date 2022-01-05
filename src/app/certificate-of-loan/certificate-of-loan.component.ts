import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-certificate-of-loan',
  templateUrl: './certificate-of-loan.component.html',
  styleUrls: ['./certificate-of-loan.component.css']
})
export class CertificateOfLoanComponent implements OnInit {
  showsalary:any
  showcalamity:any
  showhdmfsalary:any
  showhdmfcalamity:any
  constructor() { }

  ngOnInit(): void {
    this.showsalary = 0;
    this.showcalamity=0;
    this.showhdmfsalary=0;
    this.showhdmfcalamity=0;
  }
  public showsalaryLoan(){
    this.showsalary = 1;
    this.showcalamity = 0;
    this.showhdmfsalary=0;
    this.showhdmfcalamity=0;
  }

  public showcalamityLoan(){
    this.showsalary = 0;
    this.showcalamity = 1;
    this.showhdmfsalary=0;
    this.showhdmfcalamity=0;
  }
  public showhdmfsalaryLoan(){
    this.showsalary = 0;
    this.showcalamity = 0;
    this.showhdmfsalary=1;
    this.showhdmfcalamity=0;
  }

  public showhdmfcalamityLoan(){
    this.showsalary = 0;
    this.showcalamity = 0;
    this.showhdmfsalary=0;
    this.showhdmfcalamity=1;
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
