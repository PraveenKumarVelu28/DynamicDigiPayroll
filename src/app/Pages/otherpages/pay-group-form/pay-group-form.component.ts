import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-pay-group-form',
  templateUrl: './pay-group-form.component.html',
  styleUrls: ['./pay-group-form.component.css']
})
export class PayGroupFormComponent implements OnInit {
id : any;
description:any;
  result: any;
  constructor(private DigipayrollServiceService: DigipayrollServiceService,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {
        this.GetPayGroup();
      }
    })
  }

  OnSubmit(){
    debugger 
   var json = {  
      "Description": this.description
    };
    this.DigipayrollServiceService.InsertPayGroup(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully saved!!")
      location.href="/PayGroup"
      })
  }

  GetPayGroup() {
    this.DigipayrollServiceService.GetPayGroup().subscribe(
    data => {
    debugger
    this.result = data;
		this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
		this.description=this.result[0].description;
	
      }
    ) 
  }

  Update(){
    debugger
    var json = {
     'ID': this.id,
     "description": this.description        
     };
   
     this.DigipayrollServiceService.UpdatePayGroup(json).subscribe(
       data => {
       debugger
       let result = data;
       Swal.fire("Update Sucessfully");
       location.href="/PayGroup"
     })
  }
}
