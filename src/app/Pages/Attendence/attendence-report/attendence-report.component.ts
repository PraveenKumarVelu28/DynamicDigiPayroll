import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-attendence-report',
  templateUrl: './attendence-report.component.html',
  styleUrls: ['./attendence-report.component.css']
})
export class AttendenceReportComponent implements OnInit {
  shiftdetails:any;
  data:any;
  constructor(private ActivatedRoute: ActivatedRoute, private DigipayrollServiceService: DigipayrollServiceService) { }

  ngOnInit(): void {
    this.GetMyAttendenceDetails()
  }
  public GetMyAttendenceDetails()
  {
    debugger
   this.DigipayrollServiceService.GetMyAttendenceDetails().subscribe(data=>{
      debugger
      this.shiftdetails=data;
    },
    )
  }
  refresh(){
    location.reload();
  }
}
