import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  userName: any;
  password: any;
  roleID: any;
  loginTypeList: any;
  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }

  ngOnInit(): void {
    // if (localStorage.getItem('temp') == '1') {
    //    localStorage.clear();
    //    location.reload();
    //   location.href="#/PayRoll"

    // }
    // this.GetLoginTypeMaster();
  } 
  // GetLoginTypeMaster() {

  //   this.DigipayrollServiceService.GetLoginTypeMaster().subscribe(data => {

  //     this.loginTypeList = data;
  //   })
  // }
  


  public login() {
    debugger
    // sessionStorage.setItem('userName', 'admin');
     sessionStorage.setItem('temp', '1');
    // this.router.navigate(["/Dashboard"]);
    location.href="#/PayRoll"
    // sessionStorage.setItem('roleid', '1');
    // location.reload();

  }

  public getRoleID(even: any) {
    debugger
    this.roleID = even.target.value;
  }
}
