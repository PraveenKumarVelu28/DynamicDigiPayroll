import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-overtime-details',
  templateUrl: './overtime-details.component.html',
  styleUrls: ['./overtime-details.component.css']
})
export class OvertimeDetailsComponent implements OnInit {
 time:any;
 timedetails:any;
  constructor(private DigiServiceService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetMyOverTimeDetails();
  }
  public GetMyOverTimeDetails()
  {
    debugger
   this.DigiServiceService.GetMyOverTimeDetails().subscribe(data=>{
      debugger
      this.timedetails=data;
    },
    )
  }

}
