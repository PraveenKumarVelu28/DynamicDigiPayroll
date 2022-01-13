import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
@Component({
  selector: 'app-bir2316',
  templateUrl: './bir2316.component.html',
  styleUrls: ['./bir2316.component.css']
})
export class Bir2316Component implements OnInit {

  constructor(public DigiofficeService: DigipayrollServiceService){}
  showleaseforprint:any;
  stafflist:any;
  uniquelist1:any;
  ngOnInit(): void {
    this.DigiofficeService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.deniminimis != null);

      const key="id"

      this.uniquelist1  = [...new Map(this.stafflist.map((item: { [x: string]: any; }) =>
      [(item[key]), item])).values()]
    });


    this.showleaseforprint = 0;
  }

  public showpdf(){
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
