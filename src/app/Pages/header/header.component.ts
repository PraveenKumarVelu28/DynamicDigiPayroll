import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  company_name: any;
  temp:any
  roleid:any;
  role:any;
  UserName:any;
  constructor() { }

  ngOnInit(): void {
    this.temp=sessionStorage.getItem('temp')
    this.roleid = sessionStorage.getItem('roleid');
    this.company_name = sessionStorage.getItem("company_name");
    this.UserName = sessionStorage.getItem('UserName');
    this.role = sessionStorage.getItem('role')
  }
  logout() {
    sessionStorage.clear();
    location.href = "/Login";
    //location.reload();
  }

  
}
