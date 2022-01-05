import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-adjustment-form',
  templateUrl: './company-adjustment-form.component.html',
  styleUrls: ['./company-adjustment-form.component.css']
})
export class CompanyAdjustmentFormComponent implements OnInit {

  result: any;
  id: any;

  constructor(private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute: ActivatedRoute) { }

  type: any;
  name: any;
  code: any;
  amount: any;
  writeremarks: any;
  before: any;
  taxable: any;
  maxaccumulated: any;

  ngOnInit(): void {
   this.ActivatedRoute.params.subscribe(params=>{
     debugger
    this.id=params["id"];
    if(this.id!=null&&this.id!=undefined){
      this.GetCompanyAdjustment();
    }
   })
  }

  GetCompanyAdjustment()
  {
  this.DigipayrollServiceService.GetCompanyAdjustment().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));
      this.type=this.result[0].type;
      this.name=this.result[0].name;
      this.code=this.result[0].code;
      this.amount=this.result[0].amount;
      this.writeremarks=this.result[0].remarks;
      this.before=this.result[0].beforeTax;
      this.taxable=this.result[0].taxable;
      this.maxaccumulated=this.result[0].maxAccumulated;

    })
  }  
  save(){
     var json = {
    
    "Type": this.type,
    "Name": this.name,
    "Code": this.code,
    "Amount": this.amount,
    "Remarks": this.writeremarks,
    "BeforeTax": this.before,
    "Taxable": this.taxable,
    "Max Accumulated": this.maxaccumulated,

  };

  this.DigipayrollServiceService.InsertCompanyAdjustment(json).subscribe(
    data => {
    debugger
    let result = data;
    alert("Successfully saved!!")
    location.href="/CompanyAdjustment"
  })


 
  }


  Update(){
    debugger
    var json = {
     "ID":this.id,

     "Type": this.type,
     "Name": this.name,
     "Code": this.code,
     "Amount": this.amount,
     "Remarks": this.writeremarks,
     "BeforeTax": this.before,
     "Taxable": this.taxable,
     "MaxAccumulated": this.maxaccumulated,


    };
  
    this.DigipayrollServiceService.UpdateCompanyAdjustment(json).subscribe(
      data => {
      debugger
      let result = data;
      location.href="/CompanyAdjustment/";
      Swal.fire("Updated Sucessfully....!");
    })
  }

}
