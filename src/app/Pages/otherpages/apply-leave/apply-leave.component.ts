import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.GetLeaveBalance();
  }

  myleaveBalanceList:any;

  public GetLeaveBalance() {
    debugger
    this.DigipayrollServiceService.GetLeaveBalance().subscribe(data=>{
      debugger
      this.myleaveBalanceList=data ;
      debugger
     })
  }

  refresh(){
    location.reload();
  }

}
