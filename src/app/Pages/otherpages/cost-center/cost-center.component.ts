import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cost-center',
  templateUrl: './cost-center.component.html',
  styleUrls: ['./cost-center.component.css']
})
export class CostCenterComponent implements OnInit {
  SelectedData: any;
  id: any;
  costcenter: any;
  constructor(private ActivatedRoute: ActivatedRoute, private DigipayrollServiceService: DigipayrollServiceService) { }

  ngOnInit(): void {
    debugger;
    this.GetCostCenter();
    // this.ActivatedRoute.params.subscribe(params => {
    //   debugger
    //   this.id = params["id"];
    //   if (this.id != null && this.id != undefined) {
    //     this.GetCostCenter();
    //   }
    // })
  }

  public GetCostCenter() {
    debugger
    this.DigipayrollServiceService.GetCostCenter().subscribe(
      data => {
        debugger
        this.costcenter = data;
      })
  }

  Update (costcentredata: any){
    debugger
   location.href="/sssForm/"+ costcentredata.id;
  }

  public Ondelete(id:any) {
    this.DigipayrollServiceService.DeleteCostCenter(id).subscribe(
      data => {
        debugger
        this.GetCostCenter();
        Swal.fire('Deleted');
      }
    )
  }

  // Modify(details: any){
  //   debugger
  //  location.href="/CostCenterForm/"+ details.id;
  // }
}
