import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DigiPayroll';

  
  company_name: any;
  temp:any
  ngOnInit() {
    this.temp=localStorage.getItem('temp')
    this.company_name = localStorage.getItem("company_name");
  }
}
