import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adjustment',
  templateUrl: './adjustment.component.html',
  styleUrls: ['./adjustment.component.css']
})
export class AdjustmentComponent implements OnInit {

  employeedetails:any;
  ID:any;
  constructor(private DigiPayrollService:DigipayrollServiceService,private ActivatedRouted:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetAdjustment();
  }

  public GetAdjustment() {
    debugger
    this.DigiPayrollService.GetAdjustment().subscribe(data=>{
      debugger
      this.employeedetails=data ;
     })
  }

  GetId(id: any) {
    this.ID = id
  }

  update() {
    debugger
    if (this.ID== null || this.ID==undefined) {
      Swal.fire('Please Select the Record to Modify');
      // location.href = "/PayGroup"
    }

    else {
      location.href="#/AdjustmentForm/"+ this.ID;
    }
  }
}
