import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from '../digipayroll-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-country-master',
  templateUrl: './country-master.component.html',
  styleUrls: ['./country-master.component.css']
})
export class CountryMasterComponent implements OnInit {

  constructor(public DigiofficeService: DigipayrollServiceService,private activatedroute: ActivatedRoute) { }
  ID:any;
  leavelist:any;
  Short:any;
  Description:any;
  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
        this.Short = "",
        this.Description = ""
         
      }
      else {

        this.DigiofficeService.GetCountryType().subscribe(
          data => {
            debugger
            
            this.leavelist = data.filter(x => x.id == this.ID);

            this.Short = this.leavelist[0].short
            this.Description = this.leavelist[0].description
           
          },
        );
      }
    }
    )
  }

  
  
  public InsertCountryType() {
    debugger;
  
  
    var entity = {


      Short : this.Short,
      Description : this.Description
    
    }
    this.DigiofficeService.InsertCountryType(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Saved Successfully");
        location.href = "#/CountryMasterDash";
        
       
      }

    })

  }


  public UpdateCountryType() {
    debugger;
  
  
    var entity = {

      ID : this.ID,
      Short : this.Short,
      Description : this.Description
    
    }
    this.DigiofficeService.UpdateCountryType(entity).subscribe(data => {
    
        Swal.fire("Updated Successfully");
        location.href = "#/CountryMasterDash";
        
       
     

    })

  }
}
