import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from '../digipayroll-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  constructor(public DigipayrollServiceService: DigipayrollServiceService, public router: Router) { }

  stafflist: any;
  term: any;
  ngOnInit(): void {
    debugger

    this.DigipayrollServiceService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data;
    });


  }
  date: any;
  public getdate(event: any) {
    debugger
    this.date = event.target.value;
    this.DigipayrollServiceService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.filterdate == this.date);
    });
  }

}
