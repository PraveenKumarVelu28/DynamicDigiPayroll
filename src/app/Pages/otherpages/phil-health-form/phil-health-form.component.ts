import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-phil-health-form',
  templateUrl: './phil-health-form.component.html',
  styleUrls: ['./phil-health-form.component.css']
})
export class PhilHealthFormComponent implements OnInit {

  result: any;
  id: any;

  constructor(private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute:ActivatedRoute) { }

  monthlybasicsalary:any;
  monthlyshare:any;
  personalshare:any;
  employershare:any;

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params=>{
      debugger
     this.id=params["id"];
     if(this.id!=null&&this.id!=undefined){
       this.GetPhilHealth();
     }
    })
  }
 
  GetPhilHealth()
  {
  this.DigipayrollServiceService.GetPhilHealth().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));
      this.monthlybasicsalary=this.result[0].monthly_Basic_Salary_Into_Five;
      this.monthlyshare=this.result[0].monthly_Share;
      this.personalshare=this.result[0].personal_Share;
      this.employershare=this.result[0].employee_Share; 
     })
  }
     
  save(){
      var json = {    
     "Monthly_Basic_Salary_Into_Five": this.monthlybasicsalary,
     "Monthly_Share": this.monthlyshare,
     "Personal_Share": this.personalshare,
     "Employee_Share": this.employershare,
  };
 
  this.DigipayrollServiceService.InsertPhilHealth(json).subscribe(
     data => {
     debugger
     let result = data;
     location.href="/PhillHealth/"
  }) 
  alert("Mentioned Monthly basicsalary is "+this.monthlybasicsalary)
  alert("Mentioned Monthly share is "+this.monthlyshare)
  }
 
  Update(){
    debugger
    var json = {
      "ID":this.id,
      "Monthly_Basic_Salary_Into_Five": this.monthlybasicsalary,
      "Monthly_Share": this.monthlyshare,
      "Personal_Share": this.personalshare,
      "Employee_Share": this.employershare,   
    };
   
    this.DigipayrollServiceService.UpdatePhilHealth(json).subscribe(
      data => {
      debugger
      let result = data;
      location.href="#/PhillHealth/";
      Swal.fire("Update Sucessfully.....!");
    })
  }


}
