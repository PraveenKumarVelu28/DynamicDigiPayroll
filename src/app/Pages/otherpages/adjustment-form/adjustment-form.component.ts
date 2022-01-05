import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-adjustment-form',
  templateUrl: './adjustment-form.component.html',
  styleUrls: ['./adjustment-form.component.css']
})
export class AdjustmentFormComponent implements OnInit {

  constructor(private DigipayrollServiceService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }
  type:any;
  name:any;
  code:any;
  amount:any;
  remarks:any;
  before:any;
  taxable:any;
  maxAccumulated:any;
  result:any;
  id:any;
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params=>{
      debugger
     this.id=params["id"];
     if(this.id!=null&&this.id!=undefined){
       this.GetAdjustment();
     }
    })
  }

  OnSubmit(){
    debugger 
   var json = {  
      "type": this.type,
      "name": this.name,
      "code":this.code,
      "amount":this.amount, 
      "remarks":this.remarks,
      "before":this.before,
      "taxable":this.taxable,
      "maxAccumulated":this.maxAccumulated
    };
    this.DigipayrollServiceService.InsertAdjustment(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully saved!!")
    location.href="#/Adjustment";
      })
  }

  GetAdjustment()
  {
  this.DigipayrollServiceService.GetAdjustment().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));
      this.type=this.result[0].day;
      this.name=this.result[0].type;
      this.code=this.result[0].code;
      this.amount=this.result[0].amount;
      this.remarks=this.result[0].remarks;
      this.before=this.result[0].before;
      this.taxable=this.result[0].taxable;
      this.maxAccumulated=this.result[0].maxAccumulated;
 
     })
  }

  Update(){
    debugger
    var json = {
      "ID":this.id,
      "type": this.type,
      "name": this.name,
      "code":this.code,
      "amount":this.amount, 
      "remarks":this.remarks,
      "before":this.before,
      "taxable":this.taxable,
      "maxAccumulated":this.maxAccumulated
    };
   
    this.DigipayrollServiceService.UpdateAdjustment(json).subscribe(
      data => {
      debugger
      let result = data;
      location.href="#/Adjustment";
      Swal.fire("Updated Sucessfully.....!");
    })
  }


}
