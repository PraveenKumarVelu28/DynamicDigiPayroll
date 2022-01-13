import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-government',
  templateUrl: './government.component.html',
  styleUrls: ['./government.component.css']
})
export class GovernmentComponent implements OnInit {
  govtattachment:any;
  constructor(private DigipayrollServiceService: DigipayrollServiceService) { }
  govtlist: any;
  ngOnInit(): void {
    this.GetNewGovernmentRecords();
  }

  employeelist:any;
  merged:any;
  public GetNewGovernmentRecords() {
    debugger
    this.DigipayrollServiceService.GetNewGovernmentRecords().subscribe(data => {
      debugger
      this.govtlist = data;
     
    })

    this.DigipayrollServiceService.GetEmployeeSalary().subscribe(data => {
      debugger
      this.employeelist = data;
     
     
  
    });
     this.merged = [];

    for(let i=0; i<this.govtlist.length; i++) {
      this.merged.push({
       ...this.govtlist[i], 
       ...(this.employeelist.find((itmInner:any) => itmInner.id === this.govtlist[i].staffID))}
      );
    }
    console.log('data', this.merged)
  }


  



  ssS_Number: any;
  ssS_DatePaid: any;
  sssLoan_Number: any;
  sssLoan_DatePaid: any;
  sssCalamityLoan_Number: any;
  sssCalamityLoan_DatePaid: any;
  philHealth_Number: any;
  philHealth_DatePaid: any;
  hdmF_Number: any;
  hdmF_DatePaid: any;
  hdmfLoan_Number: any;
  hdmfLoan_DatePaid: any;
  hdmpCalamityLoan_Number: any;
  hdmpCalamityLoan_DatePaid: any;


  Type:any
  SBRORNumber:any
  Amount:any;
  DatePaid:any;
  staffId:any;
  staffName:any;

  save() {
    var json = {

      "type": this.Type,
      "sbrorNumber": this.SBRORNumber,
      "amount": this.Amount,
      "datePaid": this.DatePaid,
      "attachment":this.govtattachment,
      "staffId":this.staffId

      // "ssS_Number": this.ssS_Number,
      // "ssS_DatePaid": this.ssS_DatePaid,
      // "sssLoan_Number": this.sssLoan_Number,
      // "sssLoan_DatePaid": this.sssLoan_DatePaid,
      // "sssCalamityLoan_Number": this.sssCalamityLoan_Number,
      // "sssCalamityLoan_DatePaid": this.sssCalamityLoan_DatePaid,
      // "philHealth_Number": this.philHealth_Number,
      // "philHealth_DatePaid": this.philHealth_DatePaid,
      // "hdmF_Number": this.hdmF_Number,
      // "hdmF_DatePaid": this.hdmF_DatePaid,
      // "hdmfLoan_Number": this.hdmfLoan_Number,
      // "hdmfLoan_DatePaid": this.hdmfLoan_DatePaid,
      // "hdmpCalamityLoan_Number": this.hdmpCalamityLoan_Number,
      // "hdmpCalamityLoan_DatePaid": this.hdmpCalamityLoan_DatePaid,

    };

    this.DigipayrollServiceService.InsertNewGovernmentRecords(json).subscribe(
      data => {
        debugger
        let result = data;
        Swal.fire("Saved Sucessfully....!");
        location.reload();
      })
  }

  delete(id: any){
    debugger;
    this.DigipayrollServiceService.DeleteNewGovernmentRecords(id).subscribe(
      data => {
       Swal.fire('Deleted Successfully...!')   
       location.reload() 
    })
  }

  files: File[] = [];
  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.uploadattachments();
    console.log("content", this.files);
  }


  onRemove(event:any)
  {
debugger
console.log(event);
this.files.splice(this.files.indexOf(event),1);
  }
  public uploadattachments() {
    debugger
    this.DigipayrollServiceService.AttachmentsUpload(this.files).subscribe(res => {
      debugger
      this.govtattachment = res;
      alert("ATTACHMENT UPLOADED");
    })
  }
}
