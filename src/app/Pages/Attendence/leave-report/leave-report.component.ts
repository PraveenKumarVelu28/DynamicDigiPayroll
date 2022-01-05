import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leave-report',
  templateUrl: './leave-report.component.html',
  styleUrls: ['./leave-report.component.css']
})
export class LeaveReportComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.GetMyLeaveReport();
  }

  myleaveReportList:any;

  public GetMyLeaveReport() {
    debugger
    this.DigipayrollServiceService.GetMyLeaveReport().subscribe(data=>{
      debugger
      this.myleaveReportList=data ;
      debugger
     })
  }

  refresh(){
    location.reload();
  }

}
