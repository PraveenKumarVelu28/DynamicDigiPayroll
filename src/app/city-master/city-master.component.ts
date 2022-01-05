import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from '../digipayroll-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-city-master',
  templateUrl: './city-master.component.html',
  styleUrls: ['./city-master.component.css']
})
export class CityMasterComponent implements OnInit {

  constructor(public DigiofficeService: DigipayrollServiceService,private activatedroute: ActivatedRoute) { }
  ID:any;
  leavelist:any;
  Short:any;
  Description:any;
  ngOnInit(): void {
    this.StateID="Select"
    this.GetStateType()
    this.activatedroute.params.subscribe(params => {
      debugger;
      this.ID = params['id'];
      if (this.ID == undefined) {
        this.Short = "",
        this.Description = ""
         
      }
      else {

        this.DigiofficeService.GetCityType().subscribe(
          data => {
            debugger
            
            this.leavelist = data.filter(x => x.id == this.ID);
            this.StateID = this.leavelist[0].stateID
            this.Short = this.leavelist[0].short
            this.Description = this.leavelist[0].description
           
          },
        );
      }
    }
    )
  }

  term:any;

  public GetStateType() {
    debugger
    this.DigiofficeService.GetStateType().subscribe(data => {
      debugger
      this.leavelist = data
    })
  }



 
  StateID:any;
  
  public InsertCityType() {
    debugger;
  
  
    var entity = {

      'StateID': this.StateID,
      'Short' : this.Short,
      'Description' : this.Description
    
    }
    this.DigiofficeService.InsertCityType(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Saved Successfully");
        // location.href = "#/Companydashbaord";
        
       
      }

    })

  }


  public UpdateCityType() {
    debugger;
  
  
    var entity = {

      ID : this.ID,
      Short : this.Short,
      Description : this.Description
    
    }
    this.DigiofficeService.UpdateCityType(entity).subscribe(data => {
    
        Swal.fire("Updated Successfully");
        // location.href = "#/Companydashbaord";
        
       
     

    })

  }

}
