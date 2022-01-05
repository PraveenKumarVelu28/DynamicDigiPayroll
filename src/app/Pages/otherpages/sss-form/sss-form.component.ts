import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sss-form',
  templateUrl: './sss-form.component.html',
  styleUrls: ['./sss-form.component.css']
})
export class SssFormComponent implements OnInit {

  result: any;
  id: any;

  constructor(private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute: ActivatedRoute) { }

  selectMinRange: any;
  selectMaxRange: any;
  selectMonthlySalaryCredit: any;
  selectSSER: any;
  selectSSEE: any;
  selectSSTotal: any;
  selectMpfEr: any;
  selectMpfEe: any;
  selectEcEr: any;
  selectTotalContribution: any;

  ngOnInit(): void {
   this.ActivatedRoute.params.subscribe(params=>{
     debugger
    this.id=params["id"];
    if(this.id!=null&&this.id!=undefined){
      this.GetSSS();
    }
   })
  }

  GetSSS()
  {
  this.DigipayrollServiceService.GetSSS().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));

      this.selectMinRange=this.result[0].min_Range;
      this.selectMaxRange=this.result[0].max_Range;
      this.selectMonthlySalaryCredit=this.result[0].monthly_Salary_Creadited;
      this.selectSSER=this.result[0].sS_ER;
      this.selectSSEE=this.result[0].sS_EE;
      this.selectSSTotal=this.result[0].sS_Total;
      this.selectMpfEr=this.result[0].mpF_ER;
      this.selectMpfEe=this.result[0].mpF_EE;
      this.selectEcEr=this.result[0].eC_ER;
      this.selectTotalContribution=this.result[0].total_Contribution;

    })
  }  
  save(){
     var json = {
    
    "Min_Range": this.selectMinRange,
    "Max_Range": this.selectMaxRange,
    "Monthly_Salary_Creadited": this.selectMonthlySalaryCredit,
    "SS_ER": this.selectSSER,
    "SS_EE": this.selectSSEE,
    "SS_Total": this.selectSSTotal,
    "MPF_ER": this.selectMpfEr,
    "MPF_EE": this.selectMpfEe,
    "EC_ER": this.selectEcEr,
    "Total_Contribution": this.selectTotalContribution,

  };

  this.DigipayrollServiceService.InsertSSS(json).subscribe(
    data => {
    debugger
    let result = data;
    location.href="/SSS/"
  })

  alert("Mentioned MaxRange is "+this.selectMinRange)
  alert("Mentioned MaxRange is "+this.selectMaxRange)
  }


  Update(){
    debugger
    var json = {
     "ID":this.id,
     "Min_Range": this.selectMinRange,
     "Max_Range": this.selectMaxRange,
     "Monthly_Salary_Creadited": this.selectMonthlySalaryCredit,
     "SS_ER": this.selectSSER,
     "SS_EE": this.selectSSEE,
     "SS_Total": this.selectSSTotal,
     "MPF_ER": this.selectMpfEr,
     "MPF_EE": this.selectMpfEe,
     "EC_ER": this.selectEcEr,
     "Total_Contribution": this.selectTotalContribution,
    };
  
    this.DigipayrollServiceService.UpdateSSS(json).subscribe(
      data => {
      debugger
      let result = data;
      location.href="#/SSS";
      Swal.fire("Updated Sucessfully....!");
    })
  }

}
