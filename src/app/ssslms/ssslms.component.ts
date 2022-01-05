import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssslms',
  templateUrl: './ssslms.component.html',
  styleUrls: ['./ssslms.component.css']
})
export class SSSLMSComponent implements OnInit {

  constructor() { }
  Month:any;
  Year:any;
  ngOnInit(): void {
    this.Month="jan";
    this.Year="2021";
  }


}
