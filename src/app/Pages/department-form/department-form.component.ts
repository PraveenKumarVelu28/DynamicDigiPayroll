import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  name:any;
  code:any;
  remarks:any;
  result:any;
  ID:any;
  constructor(private DigipayrollServiceService: DigipayrollServiceService,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.ID = params['id'];
      if (this.ID != undefined && this.ID != null) {
        this.GetDepartment();
      }
    })
  
   // this. GetDepartment() ;
  }
  OnSubmit(){
    debugger 
   var json = {  
      "name": this.name,
      "code": this.code,
      "remarks":this.remarks   
    };
    this.DigipayrollServiceService.InsertDepartment(json).subscribe(
      data => {
        debugger
        let ID = data;
    alert("Successfully saved!!")
      location.href="/Department"
      })
  }

  GetDepartment() {
    this.DigipayrollServiceService.GetDepartment().subscribe(
    data => {
    debugger
    this.result = data;
		this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.ID));
		this.name=this.result[0].name;
		this.code=this.result[0].code;
    this.remarks=this.result[0].remarks;
      }
    )
  }

  Update(){
    debugger
     var json = {
      'ID': this.ID,
      "name": this.name,
      "code": this.code,
      "remarks":this.remarks           
      };
    
      this.DigipayrollServiceService.UpdateDepartment(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Update Sucessfully");
      location.href="/Department";
      })
    }
}
