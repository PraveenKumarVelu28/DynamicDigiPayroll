import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state-master',
  templateUrl: './state-master.component.html',
  styleUrls: ['./state-master.component.css']
})
export class StateMasterComponent implements OnInit {

  constructor(public DigiofficeService: DigipayrollServiceService,private activatedroute: ActivatedRoute) { }
  ID:any;
  leavelist:any;
  Short:any;
  Description:any;
  CountryID:any;

  

  ngOnInit(): void {
    this.GetCountryType();
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
        this.Short = "",
        this.Description = ""
         
      }
      else {

        this.DigiofficeService.GetStateType().subscribe(
          data => {
            debugger
            
            this.leavelist = data.filter(x => x.id == this.ID);
            this.CountryID = this.leavelist[0].countryID
            this.Short = this.leavelist[0].short
            this.Description = this.leavelist[0].description
           
          },
        );
      }
    }
    )
  }


  leavelist1: any
  public GetCountryType() {
    debugger
    this.DigiofficeService.GetCountryType().subscribe(data => {
      debugger
      this.leavelist1 = data
    })
  }
  
  
  public InsertStateType() {
    debugger;
  
  
    var entity = {

      'CountryID': this.CountryID,
      'Short' : this.Short,
      'Description' : this.Description
    
    }
    this.DigiofficeService.InsertStateType(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Saved Successfully");
        location.href = "#/StateMasterDash";
        
       
      }

    })

  }


  public UpdateStateType() {
    debugger;
  
  
    var entity = {

      ID : this.ID,
      Short : this.Short,
      Description : this.Description
    
    }
    this.DigiofficeService.UpdateStateType(entity).subscribe(data => {
    
        Swal.fire("Updated Successfully");
        location.href = "#/StateMasterDash";
        
       
     

    })

  }

}
