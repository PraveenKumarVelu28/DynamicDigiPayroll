import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-phill-health',
  templateUrl: './phill-health.component.html',
  styleUrls: ['./phill-health.component.css']
})
export class PhillHealthComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute:ActivatedRoute) { }
ID:any;
  ngOnInit(): void {
    debugger
    this.GetPhilHealth();
  }

  // Update (salary: any){
  //   debugger
  //  location.href="/PhilHealthForm/"+ salary.id;
  // }

  GetId(id: any) {
    this.ID = id
  }

  update() {
    debugger
    if (this.ID== null || this.ID==undefined) {
      Swal.fire('Please Select the Record to Modify');
    }
    else {
      location.href="#/PhilHealthForm/"+ this.ID;
    }
  }

  salarylist:any;

  public GetPhilHealth() {
    debugger
    this.DigipayrollServiceService.GetPhilHealth().subscribe(data=>{
      debugger
      this.salarylist=data ;
      debugger
     })
  }


  delete(id: any){
    debugger;
  
    this.DigipayrollServiceService.DeletePhilHealth(id).subscribe(
      data => {
       Swal.fire('Deleted Successfully...!')   
       location.reload() 
    })
  }

}
