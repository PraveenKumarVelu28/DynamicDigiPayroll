import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bank-form',
  templateUrl: './bank-form.component.html',
  styleUrls: ['./bank-form.component.css']
})
export class BankFormComponent implements OnInit {
  name:any;
  code:any;
  remarks:any;
  result:any;
  id:any;
  constructor(private DigipayrollServiceService: DigipayrollServiceService,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != undefined && this.id != null) {
        this.GetBankDetails();
      }
    })
  //  this. GetBankDetails() ;
  }
  OnSubmit(){
    debugger 
   var json = {  
      "name": this.name,
      "code": this.code,
      "remarks":this.remarks   
    };
    this.DigipayrollServiceService.InsertBanks(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully saved!!")
      location.href="/Bank"
      })
  }

  GetBankDetails() {
    this.DigipayrollServiceService.GetBanks().subscribe(
    data => {
    debugger
    this.result = data;
		this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
		this.name=this.result[0].name;
		this.code=this.result[0].code;
    this.remarks=this.result[0].remarks;
      }
    ) 
  }

  Update(){
    debugger
     var json = {
      'ID': this.id,
      "name": this.name,
      "code": this.code,
      "remarks":this.remarks           
      };
    
      this.DigipayrollServiceService.UpdateBanks(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Update Sucessfully");
      location.href="/Bank";
      })
    }
}
