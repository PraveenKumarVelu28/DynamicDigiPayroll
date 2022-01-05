import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private DigipayrollServiceService: DigipayrollServiceService) { }
  SelectedData: any;
  ID: any;
  result: any;
  ngOnInit(): void {
    this.GetDepartment();
   
  }
  public GetDepartment() {
    debugger
    this.DigipayrollServiceService.GetDepartment().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

  GetId(id: any) {
    this.ID = id
  }


  public Ondelete(id:any) {
    this.DigipayrollServiceService.DeleteDepartment(id).subscribe(
      data => {
        debugger
        this.GetDepartment();
        Swal.fire('Deleted');
      }
    )
  }


  update() {
    debugger
    if (this.ID== null || this.ID==undefined) {
      Swal.fire('Please Select the Record to Modify');
      // location.href = "/PayGroup"
    }

    else {
      location.href="#/DepartmentForm/"+ this.ID;
    }
  }
}
