import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-m1excel',
  templateUrl: './m1excel.component.html',
  styleUrls: ['./m1excel.component.css']
})
export class M1excelComponent implements OnInit {

  constructor(public DigiofficeService: DigipayrollServiceService) {
    this.minDate.setDate(this.minDate.getDate() - 1);
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }

  stafflist: any;
  term: any;
  value: any;
  employeelist:any;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();
  ngOnInit(): void {
    debugger

    this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data;
    });


  



  }
  enddate: any;
  public getdate(event: any) {
    debugger
    this.enddate = event.target.value;

  }

  uniquelist:any;
  month:any;
  year:any;
  companylist:any;
  companyname:any;
  Address:any;
  companyid:any;
  public showpdf(){
       
    this.DigiofficeService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data.filter(x=>x.employeeMonth==this.month && x.emplyeeYear==this.year);
      const key = 'monthstaffid'

      this.uniquelist  = [...new Map(this.employeelist.map((item: { [x: string]: any; }) =>
        [(item[key]), item])).values()]
   

        this.DigiofficeService.GetCompanyDetails().subscribe(data => {
          debugger
          this.companylist = data
          this.companyid =  this.companylist[0].id,
          this.companyname = this.companylist[0].companyName,
          this.Address = this.companylist[0].address
    
    
    
        })


    });
  
  }





  result:any;
  public GetPayGroup() {
    debugger
    this.DigiofficeService.GetPayGroup().subscribe(
      data => {
        debugger
        this.result = data;
      })
  }

  fileName = 'Approved Applicants Reports.xlsx';
  exportexcel(): void {
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }

  selectone:any;
  selecallbtn:any;
  
  selectALL(checked: boolean) { // pass true or false to check or uncheck all
    this.selecallbtn = true;
    this.selectone = false;
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].type == "checkbox") {
        inputs[i].checked = checked;
        // This way it won't flip flop them and will set them all to the same value which is passed into the function
      }
    }
  }

}
