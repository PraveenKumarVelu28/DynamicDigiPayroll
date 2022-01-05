import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-adjustment',
  templateUrl: './company-adjustment.component.html',
  styleUrls: ['./company-adjustment.component.css']
})
export class CompanyAdjustmentComponent implements OnInit {

  constructor( private DigipayrollServiceService: DigipayrollServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.GetCompanyAdjustment()
  }

  companylist:any;

  public GetCompanyAdjustment() {
    debugger
    this.DigipayrollServiceService.GetCompanyAdjustment().subscribe(data=>{
      debugger
      this.companylist=data ;
     })
  }

  Update (company: any){
    debugger
   location.href="/CompanyAdjustmentForm/"+ company.id;
  }

  delete(id: any){
    debugger;
  
    this.DigipayrollServiceService.DeleteCompanyAdjustment(id).subscribe(
      data => {
       Swal.fire('Deleted Successfully...!')   
       location.reload() 
    })
  }

}
