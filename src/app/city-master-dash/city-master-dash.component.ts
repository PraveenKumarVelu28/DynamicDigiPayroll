import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from '../digipayroll-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-city-master-dash',
  templateUrl: './city-master-dash.component.html',
  styleUrls: ['./city-master-dash.component.css']
})
export class CityMasterDashComponent implements OnInit {

  constructor(public DigiofficeService: DigipayrollServiceService) { }
  ngOnInit(): void {
    this.GetCityType();
  }
  term: any;
  leavelist: any
  public GetCityType() {
    debugger
    this.DigiofficeService.GetCityType().subscribe(data => {
      debugger
      this.leavelist = data
    })
  }

  public DeleteCityType(ID: any) {
    debugger
    this.DigiofficeService.DeleteCityType(ID).subscribe(data => {
      debugger
      Swal.fire('Deleted SuccessFully');
      this.ngOnInit();
    })
  }
}
