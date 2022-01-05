import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-regularisation-details',
  templateUrl: './regularisation-details.component.html',
  styleUrls: ['./regularisation-details.component.css']
})
export class RegularisationDetailsComponent implements OnInit {
  shiftdetails:any;
  constructor(private DigipayrollServiceService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }
  roleid: any;
  staffID: any;
  ngOnInit(): void {
    this.roleid = localStorage.getItem('roledid');
    this.staffID = localStorage.getItem('staffid');
    this.GetAttendance();
  }


  attendancelist: any;
  public GetAttendance() {
    debugger
    this.DigipayrollServiceService.GetAttendance().subscribe(data => {
      debugger
      this.attendancelist = data.filter(x => x.supervisor == this.staffID && x.approve != 1)
    })
  }
  selecallbtn: any
  selectALL(checked: boolean) { // pass true or false to check or uncheck all
    this.selecallbtn = true;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        inputs[i].checked = checked;
        // This way it won't flip flop them and will set them all to the same value which is passed into the function
      }
    }
  }

 




}
