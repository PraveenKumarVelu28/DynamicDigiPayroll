import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-certificate-of-contribution',
  templateUrl: './certificate-of-contribution.component.html',
  styleUrls: ['./certificate-of-contribution.component.css']
})
export class CertificateOfContributionComponent implements OnInit {
  showsss:any;
  showPhilhealth:any;
  showPagibig:any;
  constructor() { }

  ngOnInit(): void {
    this.showsss = 0;
    this.showPhilhealth=0;
    this.showPagibig=0;
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
