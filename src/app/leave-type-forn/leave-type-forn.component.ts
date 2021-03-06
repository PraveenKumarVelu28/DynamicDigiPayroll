import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from '../digipayroll-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-leave-type-forn',
  templateUrl: './leave-type-forn.component.html',
  styleUrls: ['./leave-type-forn.component.css']
})
export class LeaveTypeFornComponent implements OnInit {

  constructor(public DigiofficeService: DigipayrollServiceService, private activatedroute: ActivatedRoute) { }
  ID: any;
  leavelist: any;
  Short: any;
  Description: any;
  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
        this.Short = "",
          this.Description = ""

      }
      else {

        this.DigiofficeService.GetLeaveType().subscribe(
          data => {
            debugger

            this.leavelist = data.filter(x => x.id == this.ID);

            this.Short = this.leavelist[0].short
            this.Description = this.leavelist[0].description
            this.Entitlement_Per_Year = this.leavelist[0].entitlement_Per_Year
            this.carry_forward = this.leavelist[0].carry_forward

          },
        );
      }
    }
    )
  }








  Entitlement_Per_Year: any;
  carry_forward: any;
  public InsertLeaveTypeMaster() {
    debugger;
    var entity = {
      Short: this.Short,
      Description: this.Description,
      Entitlement_Per_Year: this.Entitlement_Per_Year,
      carry_forward: this.carry_forward

    }
    this.DigiofficeService.InsertLeaveTypeMaster(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Saved Successfully");
        location.href = "#/LeaveTypeDashboard";


      }

    })

  }


  public UpdateLeaveType() {
    debugger;


    var entity = {

      ID: this.ID,
      Short: this.Short,
      Description: this.Description,
      Entitlement_Per_Year: this.Entitlement_Per_Year,
      carry_forward: this.carry_forward

    }
    this.DigiofficeService.UpdateLeaveType(entity).subscribe(data => {

      Swal.fire("Updated Successfully");
      location.href = "#/LeaveTypeDashboard";




    })

  }


}
