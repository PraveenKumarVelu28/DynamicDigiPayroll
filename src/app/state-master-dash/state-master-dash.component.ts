import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';


@Component({
  selector: 'app-state-master-dash',
  templateUrl: './state-master-dash.component.html',
  styleUrls: ['./state-master-dash.component.css']
})
export class StateMasterDashComponent implements OnInit {

  constructor(public DigiofficeService: DigipayrollServiceService) { }
  ngOnInit(): void {
    this.GetStateType();
  }
  term:any;
  leavelist: any
  public GetStateType() {
    debugger
    this.DigiofficeService.GetStateType().subscribe(data => {
      debugger
      this.leavelist = data
    })
  }


  public DeleteStateType(ID:any) {
    debugger
    this.DigiofficeService.DeleteStateType(ID).subscribe(data => {
      debugger
     Swal.fire('Deleted Successfully')
     location.reload();
    })
  }
}
