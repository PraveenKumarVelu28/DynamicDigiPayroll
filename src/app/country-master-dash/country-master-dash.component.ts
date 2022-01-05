import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from '../digipayroll-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-country-master-dash',
  templateUrl: './country-master-dash.component.html',
  styleUrls: ['./country-master-dash.component.css']
})
export class CountryMasterDashComponent implements OnInit {



    constructor(public DigiofficeService: DigipayrollServiceService) { }
    ngOnInit(): void {
      this.GetCountryType();
    }
    term:any;
    leavelist: any
    public GetCountryType() {
      debugger
      this.DigiofficeService.GetCountryType().subscribe(data => {
        debugger
        this.leavelist = data
      })
    }
  
    public DeleteCountryType(ID:any) {
      debugger
      this.DigiofficeService.DeleteCountryType(ID).subscribe(data => {
        debugger
       Swal.fire('Deleted SuccessFully')
       location.reload();
      })
    }
}
