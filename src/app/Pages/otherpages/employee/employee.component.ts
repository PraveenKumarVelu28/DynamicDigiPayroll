import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME, TOOLBAR_POSITION, TOOLBAR_BUTTON_POSITION } from 'ng-wizard';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {



  constructor(public DigiofficeService: DigipayrollServiceService, public router: Router) { }

  stafflist: any;
  term: any;
  ngOnInit(): void {
    debugger

    this.DigiofficeService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data;
    });


  }
  date: any;
  public getdate(event: any) {
    debugger
    this.date = event.target.value;
    this.DigiofficeService.GetMyDetails().subscribe(data => {
      debugger
      this.stafflist = data.filter(x => x.filterdate == this.date);
    });
  }

}
