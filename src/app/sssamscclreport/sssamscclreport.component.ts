import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sssamscclreport',
  templateUrl: './sssamscclreport.component.html',
  styleUrls: ['./sssamscclreport.component.css']
})
export class SSSAMSCCLReportComponent implements OnInit {

  constructor() { }

  Month:any;
  Year:any;
  ngOnInit(): void {
    this.Month="jan";
    this.Year="2021";
  }
}
