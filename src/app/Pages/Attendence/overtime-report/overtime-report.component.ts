import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overtime-report',
  templateUrl: './overtime-report.component.html',
  styleUrls: ['./overtime-report.component.css']
})
export class OvertimeReportComponent implements OnInit {
  time: any;
  timedetails: any;
  constructor(private DigiServiceService: DigipayrollServiceService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetMyOverTimeDetails();
  }
  public GetMyOverTimeDetails() {
    debugger
    this.DigiServiceService.GetMyOverTimeDetails().subscribe(data => {
      debugger
      this.timedetails = data;
    },
    )
  }

  refresh(){
    location.reload();
  }
}


