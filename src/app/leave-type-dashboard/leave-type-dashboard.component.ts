import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from '../digipayroll-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leave-type-dashboard',
  templateUrl: './leave-type-dashboard.component.html',
  styleUrls: ['./leave-type-dashboard.component.css']
})
export class LeaveTypeDashboardComponent implements OnInit {

  constructor(public DigiofficeService: DigipayrollServiceService) { }
  ngOnInit(): void {
    this.GetLeaveType();
  }
  term: any;
  leavelist: any
  public GetLeaveType() {
    debugger
    this.DigiofficeService.GetLeaveType().subscribe(data => {
      debugger
      this.leavelist = data
    })
  }


  public delete(id: any) {
    debugger
    this.DigiofficeService.DeleteLeaveTypeMaster(id).subscribe(data => {
      debugger
      Swal.fire('Deleted Successfully');
      this.ngOnInit();
    })
  }
}
