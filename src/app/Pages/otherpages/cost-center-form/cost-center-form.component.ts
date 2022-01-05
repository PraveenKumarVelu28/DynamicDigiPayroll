import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cost-center-form',
  templateUrl: './cost-center-form.component.html',
  styleUrls: ['./cost-center-form.component.css']
})
export class CostCenterFormComponent implements OnInit {

  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }
  name: any;
  code: any;
  remarks: any;
  details: any;
  result: any;
  id: any;
  ngOnInit(): void {
  }

  OnSubmit() {
    debugger
    var json = {
      "name": this.name,
      "code": this.code,
      "remarks": this.remarks
    };
    this.DigipayrollServiceService.InsertCostCenter(json).subscribe(
      data => {
        debugger
        let id = data;
        alert("Successfully saved!!")
        location.href = "/CostCenter"
      })
  }

  GetCostCenter() {
    this.DigipayrollServiceService.GetCostCenter().subscribe(
      data => {
        debugger
        this.result = data;
        this.result = this.result.filter((x: { id: any; }) => x.id == Number(this.id));
        this.name = this.result[0].name;
        this.code = this.result[0].code;
        this.remarks = this.result[0].remarks;
      }
    )
  }


  Update() {
    debugger
    var json = {
      "name": this.name,
      "code": this.code,
      "remarks": this.remarks
    };

    this.DigipayrollServiceService.UpdateCostCenter(json).subscribe(
      data => {
        debugger
        let result = data;
        Swal.fire("Update Sucessfully");
        location.href = "/CostCenter";
      })
  }

}
