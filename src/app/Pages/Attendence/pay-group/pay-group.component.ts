import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pay-group',
  templateUrl: './pay-group.component.html',
  styleUrls: ['./pay-group.component.css']
})
export class PayGroupComponent implements OnInit {
  SelectedData: any;
  id: any;
  result: any;
  constructor(private ActivatedRoute: ActivatedRoute, private DigipayrollServiceService: DigipayrollServiceService) { }

  ngOnInit(): void {
    this.GetPayGroup();
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetPayGroup();
      }
    })
  }
  public GetPayGroup() {
    debugger
    this.DigipayrollServiceService.GetPayGroup().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

  public Ondelete(id: any) {
    this.DigipayrollServiceService.DeletePayGroup(id).subscribe(
      data => {
        debugger
        this.GetPayGroup();
        Swal.fire('Deleted');
      }
    )
  }

  GetId(id: any) {
    this.id = id
  }

  update() {
    debugger
    if (this.id== null || this.id==undefined) {
      Swal.fire('Please Select the Record to Modify');
      // location.href = "/PayGroup"
    }

    else {
      location.href = "/PayGroupForm/" + this.id;
    }
  }
}
