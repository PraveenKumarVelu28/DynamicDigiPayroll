import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userdetails:any;
  result:any;
  constructor(private DigipayrollServiceService:DigipayrollServiceService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetUserDetails();
  }
  public GetUserDetails()
  {
    debugger
   this.DigipayrollServiceService.GetUserDetails().subscribe(data=>{
      debugger
      this.userdetails=data;
    },
    )
  }

  public Ondelete(id:any) {
    this.DigipayrollServiceService.DeleteUserDetails(id).subscribe(
      data => {
        debugger
        this.GetUserDetails();
        Swal.fire('Deleted');
      }
    )
  }

}
