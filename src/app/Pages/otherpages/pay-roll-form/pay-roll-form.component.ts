import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pay-roll-form',
  templateUrl: './pay-roll-form.component.html',
  styleUrls: ['./pay-roll-form.component.css']
})
export class PayRollFormComponent implements OnInit {
Year: any;
Month:any;
Period:any;
Pay_Roll_Run_Type:any;
Pay_Group:any;
description:any;
Transaction_Date:any;
Status: any;
result:any;
id:any;
  constructor(private DigipayrollServiceService: DigipayrollServiceService,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {
        this.GetPayroll();
      }
    })
  }

  OnSubmit(){
    debugger 
   var json = {  
      "year": this.Year,
      "month": this.Month,
      "period": this.Period,
      "pay_Roll_Run_Type": this.Pay_Roll_Run_Type,
      "pay_Group": this.Pay_Group,
      "description": this.description,
      "transaction_Date": this.Transaction_Date,
      "status": this.Status
    };
    this.DigipayrollServiceService.InsertPayroll(json).subscribe(
      data => {
        debugger
        let id = data;
        Swal.fire(" Sucessfully Saved!!");
      location.href="#/PayRoll"
      })
  }

  GetPayroll() {
    this.DigipayrollServiceService.GetPayroll().subscribe(
    data => {
    debugger
    this.result = data;
		this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
    this.Year=this.result[0].year;
    this.Month=this.result[0].month;
    this.Period=this.result[0].period;
    this.Pay_Roll_Run_Type=this.result[0].pay_Roll_Run_Type;
    this.Pay_Group=this.result[0].pay_Group;
    this.description=this.result[0].description;
    this.Transaction_Date=this.result[0].transaction_Date;
    this.Status=this.result[0].status;
   
      }
    )
  }

  Update(){
    debugger
     var json = {
      'ID': this.id,
      "year": this.Year,
      "month": this.Month,
      "period": this.Period,
      "pay_Roll_Run_Type": this.Pay_Roll_Run_Type,
      "pay_Group": this.Pay_Group,
      "description": this.description,
      "transaction_Date": this.Transaction_Date,
      "status": this.Status          
      };
    
      this.DigipayrollServiceService.UpdatePayroll(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Update Sucessfully");
      location.href="#/PayRoll";
      })
    }
}



