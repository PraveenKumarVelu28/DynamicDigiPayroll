import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  email: any;
  role: any;
  dateAdded: any;
  username:any;
  isActive: any;
  isTotal: any;
  isLocked: any;
  model_Access: any;
  model_AccessList: any;
  constructor(private DigipayrollServiceService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }
  
  ngOnInit(): void {
    
  }

  OnSubmit(){
    debugger 
   var json = {  
      "userName": this.username,
      "email": this.email,
      "role":this.role ,
      "dateAdded":this.dateAdded,
      "isActive":this.isActive,
      "isTotal":this.isTotal,
      "isLocked":this.isLocked,
      "model_Access":this.model_Access

    };
    this.DigipayrollServiceService.InsertUserDetails(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully saved!!")
      location.href="/User"
      })
  }

  

}
