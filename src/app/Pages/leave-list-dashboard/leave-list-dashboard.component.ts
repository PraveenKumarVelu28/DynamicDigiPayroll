import { Component, OnInit } from '@angular/core';
import { DigipayrollServiceService } from 'src/app/digipayroll-service.service';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FullCalendarOptions, EventObject } from 'ngx-fullcalendar';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-leave-list-dashboard',
  templateUrl: './leave-list-dashboard.component.html',
  styleUrls: ['./leave-list-dashboard.component.css'],
  providers: [DatePipe]
})
export class LeaveListDashboardComponent implements OnInit {

  Staffleaveenitilment: any
  constructor(public DigiofficeService: DigipayrollServiceService, public router: Router, public datePipe: DatePipe) { }
  public showorhidecontent: any;
  options: FullCalendarOptions | undefined;
  events: EventObject[] | undefined;
  roleid: any;
  public selectedlanguage: any;
  public selectedlanguage1: any;
  public callenderyear: any;
  public callenderMonth: any;
  public callenderstartday: any;
  public callenderendday: any;
  public callenderdaysdount: any = [];
  public callenderBindData = new Date();
  public todaydate = new Date().getDate();
  public options1: any;
  public todayDay = this.datePipe.transform(new Date().getDay(), 'EEEE');
  roledid: any
  ngOnInit(): void {
    this.roledid = localStorage.getItem('roledid');

    this.getstaffleaves();
    this.DigiofficeService.GetMyDetails().subscribe(data => {
      debugger
      this.Staffleaveenitilment = data.filter(x => x.id == 10357);
    });

  }
  date: any;
  public getdate(event: any) {
    debugger
    this.date = event.target.value;
    this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025").subscribe(data => {
      debugger
      this.staffleaves = data.filter(x => x.uuid == localStorage.getItem('staffid') && x.filterdate == this.date);
    })
  }
  term: any;
  staffleaves: any;
  public getstaffleaves() {
    debugger
    this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025").subscribe(data => {
      debugger
      this.staffleaves = data.filter(x => x.uuid == 10357);
      this.buildcallender(this.staffleaves);
    })
  }
  public newlevae() {
    debugger
    this.router.navigate(['/NewLeaveRequest']);
  }
  medicalurl: any;
  public getmedicalurl(id: any) {
    debugger
    this.DigiofficeService.GetStaffLeaves(10331, 1, "01-01-2020", "01-01-2025").subscribe(data => {
      debugger
      let temp: any = data.filter(x => x.id == id.id);
      this.medicalurl = temp[0].medicalUrl;
    })
  }
  // public makeunderline(evt:any) {
  //   debugger
  //   var i, tablinks;

  //   tablinks = document.getElementsByClassName("activ1");
  //   for (i = 0; i < tablinks.length; i++) {
  //     tablinks[i].className = tablinks[i].className.replace(" active", "");
  //   }

  //   evt.currentTarget.className += " active";
  // }


  public CancelLeave(list: any) {
    debugger


    this.DigiofficeService.CancelLeave(list.id, list.noOfDays, list.uuid, list.leaveTypeID, 'Cancelled').subscribe(data => {
      debugger
      Swal.fire('Cancelled Successfully');
      this.ngOnInit();
    })

  }

  changeStatus(evn: any) {

    if (evn.currentTarget.checked) {
      this.showorhidecontent = false;
    }
    else {
      this.showorhidecontent = true;
    }

  }



  public buildcallender(MaintainanceList: string | any[]) {
    debugger
    this.callenderdaysdount.length = 0;
    this.callenderyear = this.callenderBindData.getFullYear();
    this.callenderMonth = this.datePipe.transform(this.callenderBindData, 'MMMM');
    this.callenderstartday = new Date(this.callenderBindData.getFullYear(), this.callenderBindData.getMonth(), 1);
    this.callenderendday = new Date(this.callenderBindData.getFullYear(), this.callenderBindData.getMonth() + 1, 0);
    this.callenderdaysdount.length = this.callenderendday.getDate();
    let o = 0;
    for (let i = 0; i < this.callenderdaysdount.length; i++) {
      let sdate = this.callenderstartday;
      let _date;
      if (sdate.getDate() == 1 && o == 0) {
        _date = sdate.setDate(sdate.getDate() + 0);
        o++
      }
      else {
        _date = sdate.setDate(sdate.getDate() + 1);
      }
      _date = this.datePipe.transform(sdate, 'dd');
      let _day = this.datePipe.transform(sdate, 'EEE');
      let dateformat = this.datePipe.transform(sdate, 'yyyy-MM-ddTHH:mm:ss');

      this.callenderdaysdount[i] = { date: _date, day: _day, dateformat: dateformat };
    }

    //Events Binding

    for (let j = 0; j < MaintainanceList.length; j++) {
      debugger;
      let currenteventlist = this.callenderdaysdount.filter((x: { dateformat: string | number | Date; }) => this.datePipe.transform(x.dateformat, 'yyyy-MM-dd') == this.datePipe.transform(MaintainanceList[j].sdte, 'yyyy-MM-dd'));
      if (currenteventlist.length > 0) {
        this.callenderdaysdount[currenteventlist[0].date - 1]['RequestFor'] = MaintainanceList[j].requestFor;
        this.callenderdaysdount[currenteventlist[0].date - 1]['StartTime'] = MaintainanceList[j].startTime;
        this.callenderdaysdount[currenteventlist[0].date - 1]['EndTime'] = MaintainanceList[j].endTime;
        this.callenderdaysdount[currenteventlist[0].date - 1]['mantainenceHtml'] =
          "<span class='event_PendingBookCommunity'> Staff Name : " + MaintainanceList[j].staffName +
          "<br>  Reason : " + MaintainanceList[j].leaveReason +
          // "<br>  Unit :" + MaintainanceList[j].unitID + 
          "</span>";
      }

    }
  }

  public previousmonth() {
    debugger;
    this.callenderBindData.setMonth(this.callenderBindData.getMonth() - 1);
    this.buildcallender(this.staffleaves);
  }
  public nextmonth() {
    debugger;
    this.callenderBindData.setMonth(this.callenderBindData.getMonth() + 1);
    this.buildcallender(this.staffleaves);
  }


}
