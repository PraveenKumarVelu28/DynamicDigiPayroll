import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-m1mcrf',
  templateUrl: './m1mcrf.component.html',
  styleUrls: ['./m1mcrf.component.css']
})
export class M1mcrfComponent implements OnInit {
  showleaseforprint:any;
  loader:any;
  constructor() { }

  ngOnInit(): void {
    this.showleaseforprint = 0;
    this.loader=false;
  }


  public showpdf(){
    this.showleaseforprint = 1;
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
