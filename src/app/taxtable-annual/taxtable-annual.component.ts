import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from '../digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-taxtable-annual',
  templateUrl: './taxtable-annual.component.html',
  styleUrls: ['./taxtable-annual.component.css']
})
export class TaxtableAnnualComponent implements OnInit {

  constructor(private DigipayrollServiceService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }
  taxdetails:any;

  ngOnInit(): void {
    this.GetTaxtableAnnual();
  }
  public GetTaxtableAnnual() {
    debugger
    this.DigipayrollServiceService.GetTaxtableAnnual().subscribe(
      data => {
        debugger
        this.taxdetails = data;
      })
  }

}
