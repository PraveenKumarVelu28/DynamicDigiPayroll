import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DigipayrollServiceService {

 // public baseURL = "http://localhost:4199/";   
  public baseURL = "http://103.133.214.197/DigiPayroll/";
  public host = "https://digioffice.amazeone.co/digiofficeapi";
  url:any;
  constructor(private http: HttpClient  ) { }

  public GetPhilHealth() {
    debugger
    let APIURL = this.baseURL+"Master/GetPhilHealth";
    return this.http.get<any[]>(APIURL);
  }
  
  public GetAdjustment() {
    debugger
    let APIURL = this.baseURL + "Master/GetAdjustment";
    return this.http.get<any[]>(APIURL);
  }

  public GetTaxtableAnnual() {
    debugger
    let APIURL = this.baseURL + "Master/GetTaxtableAnnual";
    return this.http.get<any[]>(APIURL);
  }
  
  public InsertAdjustment(json:any){
    let APIURL=this.baseURL+"Master/InsertAdjustment";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateAdjustment(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateAdjustment";
    return this.http.post<any[]>(APIURL, json);
  }




  public InsertPhilHealth(json:any){
    let APIURL=this.baseURL+"Master/InsertPhilHealth";
    return this.http.post<any[]>(APIURL,json);
  }

  // public UpdatePhilHealth(json : any) {   
  //   debugger
  //   let APIURL = this.baseURL + "Master/UpdatePhilHealth";
  //   return this.http.post<any[]>(APIURL,json);
  // }


  
  public GetAttendance() {
    return this.http.get<any[]>(
      this.host + "/MobileUser/GetAttendance?UserID=1&SDate=01-01-2020&EDate=01-01-2020"
    );
  }

  public GetLeaveType() {
    return this.http.get<any[]>(
      this.host + "/MasterDemo/GetLeaveType"

    );
  }

  public DeleteLeaveTypeMaster(ID: any) {
    return this.http.get<any[]>(
      this.host + "/ProjectRequest/DeleteLeaveTypeMaster?ID=" + ID);
  }



  public UpdateAttendanceWeb(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/UpdateAttendanceWeb';
    return this.http.post(this.url, data);
  }

  
  public InsertAttendanceWeb(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/InsertAttendanceWeb';
    return this.http.post(this.url, data);
  }
  

  public UpdatePhilHealth(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdatePhilHealth";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeletePhilHealth(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeletePhilHealth?ID=" +ID);
  }


  public GetSSS() {
    debugger
    let APIURL = this.baseURL+"Master/GetSSS";
    return this.http.get<any[]>(APIURL);
  }

  public InsertSSS(json:any) {
    debugger
    let APIURL = this.baseURL+"Master/InsertSSS";
    return this.http.post<any[]>(APIURL, json);
  }

  public UpdateSSS(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateBanks";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeleteSSS(ID : any) {
    debugger
    
    return this.http.get<any[]>(this.baseURL+ "Master/DeleteSSS?ID=" +ID);
  }

   
  public GetCompanyAdjustment() {
    debugger
    let APIURL = this.baseURL+"Master/GetCompanyAdjustment ";
    return this.http.get<any[]>(APIURL);
  } 
 
  
  public GetRegularization() {
    debugger
    let APIURL = this.baseURL+"Master/GetRegularization";
    return this.http.get<any[]>(APIURL);
  }

  public GetMyWeeklyShift() {
    debugger
    let APIURL = this.baseURL+"Master/GetMyWeeklyShift";
    return this.http.get<any[]>(APIURL);
  }

  
  public GetMyDetails() {
    return this.http.get<any[]>(
      this.host + "/Announcement/GetMyDetails"
    );
  }


  
  public GetPositionDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetPositionDetails"
    );
  }

  public GetMyAddressDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetMyAddressDetails"
    );
  }

  public GetDependentDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetDependentDetails"
    );
  }

 public InsertLeaveTypeMaster(data: any) {
    debugger;
    this.url = this.host + '/ProjectRequest/InsertLeaveTypeMaster';
    return this.http.post(this.url, data);
  }

  public GetNomination() {
    return this.http.get<any[]>(
      this.host + "/Master/GetNomination"
    );
  }

  public UpdateLeaveType(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/UpdateLeaveType';
    return this.http.post(this.url, data);
  }



  public GetEmploymentDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetEmploymentDetails"
    );
  }

  public GetEducationDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetEducationDetails"
    );
  }


  public GetBankDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetBankDetails"
    );
  }


  public GetID_Details() {
    return this.http.get<any[]>(
      this.host + "/Master/GetID_Details"
    );
  }


  public GetVisaDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetVisaDetails"
    );
  }

  public GetSalaryDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetSalaryDetails"
    );
  }


  public GetUserDetails() {
    debugger
    let APIURL = this.baseURL+"Master/GetUserDetails";
    return this.http.get<any[]>(APIURL);
  }

  public InsertUserDetails(json:any){
    let APIURL=this.baseURL+"Master/InsertUserDetails";
    return this.http.post<any[]>(APIURL,json);
  }

  public InsertCompanyAdjustment(json:any){
    let APIURL=this.baseURL+"Master/InsertCompanyAdjustment";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateCompanyAdjustment(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateCompanyAdjustment";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeleteCompanyAdjustment(ID : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteCompanyAdjustment";
    return this.http.get<any[]>(this.baseURL+ "Master/DeleteCompanyAdjustment?ID=" +ID);
  }

  public GetOTRates() {
    debugger
    let APIURL = this.baseURL+"Master/GetOTRates ";
    return this.http.get<any[]>(APIURL);
  }

  public InsertOTRates(json:any){
    let APIURL=this.baseURL+"Master/InsertOTRates";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateOTRates(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateOTRates";
    return this.http.post<any[]>(APIURL, json);
  }

  public DeleteOTRates(ID : any) {
    debugger 
    return this.http.get<any[]>(this.baseURL+ "Master/DeleteOTRates?ID=" +ID);
  }


  public GetTaxtable() {
    debugger
    let APIURL = this.baseURL+"Master/GetTaxtable ";
    return this.http.get<any[]>(APIURL);
  }

  public UpdateTaxtable(json: any) {
    debugger
    let APIURL = this.baseURL + "Master/UpdateTaxtable";
    return this.http.post<any[]>(APIURL, json);
  }




  public GetCompanyProfile() {
    debugger
    let APIURL = this.baseURL+"Master/GetCompanyProfile";
    return this.http.get<any[]>(APIURL);
  }

  
 
  public InsertCompanyProfile(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertCompany_Profile";
    return this.http.post<any[]>(APIURL,json);
  }


  public UpdateCompanyProfile(json : any) {    //not yet done
    debugger
    let APIURL = this.baseURL + "Master/UpdateCompanyProfile";
    return this.http.post<any[]>(APIURL,json);
  }


  public GetMyAttendenceDetails() {
    debugger
    let APIURL = this.baseURL + "Master/GetMyAttendenceDetails";
    return this.http.get<any[]>(APIURL);
  }


  public GetMyOverTimeDetails() {
    debugger
    let APIURL = this.baseURL + "Master/GetMyOverTimeDetails";
    return this.http.get<any[]>(APIURL);
  }
  
  // public DeleteFoodSenseProject(json : any) {              MasterEntity 
  //   debugger
  //   let APIURL = this.baseURL + "Master/DeleteFoodSenseProject";
  //   return this.http.post<any[]>(APIURL,json);
  // }
  

    public DeleteCompanyProfile_id(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteCompanyProfile?ID="+id;
    return this.http.get<any[]>(APIURL);
  }

  


  public GetCostCenter() {
    debugger
    let APIURL = this.baseURL + "Master/GetCostcenter";
    return this.http.get<any[]>(APIURL);
  }

  public InsertCostCenter(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertCostcenter";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateCostCenter(json : any) {    //not yet done
    debugger
    let APIURL = this.baseURL + "Master/UpdateCostCenter";
    return this.http.post<any[]>(APIURL,json);
  }

  public DeleteCostCenter(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteCostCenter?ID="+id;
    return this.http.get<any[]>(APIURL);
  }

  public GetPayroll() {
    debugger
    let APIURL = this.baseURL+"Master/GetPayroll ";
    return this.http.get<any[]>(APIURL);
  }

  public InsertPayroll(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertPayroll";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdatePayroll(json : any) {    
    debugger
    let APIURL = this.baseURL + "Master/UpdatePayroll";
    return this.http.post<any[]>(APIURL,json);
  }



  public GetDepartment() {
    debugger
    let APIURL = this.baseURL + "Master/GetDepartment";
    return this.http.get<any[]>(APIURL);
  }

  public InsertDepartment(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertDepartment";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateDepartment(json : any) {    
    debugger
    let APIURL = this.baseURL + "Master/UpdateDepartment";
    return this.http.post<any[]>(APIURL,json);
  }

  
 

  public DeleteDepartment(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteDepartment?ID="+id;
    return this.http.get<any[]>(APIURL);
  }

  public GetBanks() {
    debugger
    let APIURL = this.baseURL + "Master/GetBanks";
    return this.http.get<any[]>(APIURL);
  }
  public DeleteUserDetails(id: any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteUserDetails?ID=" + id;
    return this.http.get<any[]>(APIURL);
  }

  public DeletePayroll(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeletePayroll";
    return this.http.get<any[]>(this.baseURL+ "Master/DeletePayroll?ID=" +id);
  }

  public InsertBanks(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertBanks";
    return this.http.post<any[]>(APIURL,json);
  }

  public UpdateBanks(json : any) {    //not yet done
    debugger
    let APIURL = this.baseURL + "Master/UpdateBanks";
    return this.http.post<any[]>(APIURL,json);
  }

  public DeleteBanks(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeleteBanks?ID="+id;
    return this.http.get<any[]>(APIURL);
  }

  public GetPayGroup() {
    debugger
    let APIURL = this.baseURL + "Master/GetPayGroup";
    return this.http.get<any[]>(APIURL);
  }


  public InsertPayGroup(json : any) {
    debugger
    let APIURL = this.baseURL + "Master/InsertPayGroup";
    return this.http.post<any[]>(APIURL,json);
  }
  public UpdatePayGroup(json : any) {    //not yet done
    debugger
    let APIURL = this.baseURL + "Master/UpdatePayGroup";
    return this.http.post<any[]>(APIURL,json);
  }

  public DeletePayGroup(id : any) {
    debugger
    let APIURL = this.baseURL + "Master/DeletePayGroup?ID="+id;
    return this.http.get<any[]>(APIURL);
  }


  public GetMyLeaveReport() {
    debugger
    let APIURL = this.baseURL + "Master/GetMyLeaveReport";
    return this.http.get<any[]>(APIURL);
  }

  public GetLeaveBalance() {
    debugger
    let APIURL = this.baseURL + "Master/GetLeaveBalance";
    return this.http.get<any[]>(APIURL);
  }

  
  public AttachmentsUpload(files: any) {
    debugger
    let formdata: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formdata.append('file_upload', files[i], files[i].name);
    }
    debugger
    let APIURL = this.baseURL + "Master/UploadImages/";
    return this.http.post(APIURL, formdata);

  }

  public InsertNomination(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertNomination';
    return this.http.post(this.url, data);
  }

  public InsertMyAddressDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertMyAddressDetails';
    return this.http.post(this.url, data);
  }

  public InsertEmploymentDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertEmploymentDetails';
    return this.http.post(this.url, data);
  }

  public InsertEducationDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertEducationDetails';
    return this.http.post(this.url, data);
  }

  public InsertID_Details(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertID_Details';
    return this.http.post(this.url, data);
  }

  public InsertBankDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertBankDetails';
    return this.http.post(this.url, data);
  }


  public InsertVisaDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertVisaDetails';
    return this.http.post(this.url, data);
  }

  public InsertSalaryDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertSalaryDetails';
    return this.http.post(this.url, data);
  }


  public InsertPositionDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertPositionDetails';
    return this.http.post(this.url, data);
  }


  public InsertDependentDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/InsertDependentDetails';
    return this.http.post(this.url, data);
  }

  
  public UpdatePositionDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdatePositionDetails';
    return this.http.post(this.url, data);
  }

  public UpdateEmploymentDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateEmploymentDetails';
    return this.http.post(this.url, data);
  }


  public UpdateEducationDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateEducationDetails';
    return this.http.post(this.url, data);
  }


  public UpdateMyDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateMyDetails';
    return this.http.post(this.url, data);
  }


  public UpdateSalaryDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateSalaryDetails';
    return this.http.post(this.url, data);
  }


  public UpdateBankDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateBankDetails';
    return this.http.post(this.url, data);
  }


  public UpdateVisaDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateVisaDetails';
    return this.http.post(this.url, data);
  }


  public UpdateID_Details(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateID_Details';
    return this.http.post(this.url, data);
  }


  public UpdateNomination(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateNomination';
    return this.http.post(this.url, data);
  }

  public UpdateDependentDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateDependentDetails';
    return this.http.post(this.url, data);
  }

  public UpdateMyAddressDetails(data: any) {
    debugger;
    this.url = this.host + '/Master/UpdateMyAddressDetails';
    return this.http.post(this.url, data);
  }
  public UpdateStaff(data: any) {
    debugger;
    this.url = this.host + '/Building/UpdateBuildingStaff';
    return this.http.post(this.url, data);
  }

  public InsertMyDetails(data: any) {
    debugger;
    this.url = this.host + '/Building/InsertBuildingStaff';
    return this.http.post(this.url, data);
  }

  public GetRoleType() {
    return this.http.get<any[]>(
      this.host + "/MasterDemo/GetRoleType?UserTypeID=" + 1
    );
  }

  public GetStaffShiftDetails() {
    return this.http.get<any[]>(
      this.host + "/Master/GetStaffShiftDetails"

    );
  }

  public GetStaffLeaves(ID: any, TypeID: any, Sdate: any, Edate: any) {
    return this.http.get<any[]>(
      this.host + "/Building/GetStaffLeaves?ID=" + ID + "&TypeID=" + TypeID + "&Sdate=" + Sdate + "&Edate=" + Edate
    );
  }


  public CancelLeave(ID: any, NoOfDays: any, UserID: any, LeaveTypeID: any, Status: any) {
    debugger;
    return this.http.get<any[]>(
      this.host + "/MobileUser/CancelLeave?ID=" + ID + "&NoOfDays=" + NoOfDays + "&UserID=" + UserID + "&LeaveTypeID=" + LeaveTypeID + "&Status=" + Status
    );
  }

  public GetCountryType() {
    return this.http.get<any[]>(
      this.host + "/Building/GetCountryType"
    );
  }


  
  public DeleteStateType(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteStateType?ID=" + ID);
  }



  public GetStateType() {
    return this.http.get<any[]>(
      this.host + "/Building/GetStateType?CountryID=" + 1
    );
  }


  public GetCityType() {
    return this.http.get<any[]>(
      this.host + "/Building/GetCityType?StateID=4"
    );
  }

 public UpdateCityType(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/UpdateCityType';
    return this.http.post(this.url, data);
  }


  public UpdateCountryType(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/UpdateCountryType';
    return this.http.post(this.url, data);
  }


  public UpdateStateType(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/UpdateStateType';
    return this.http.post(this.url, data);
  }


  public InsertStateType(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/InsertStateType';
    return this.http.post(this.url, data);
  }



  public InsertCityType(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/InsertCityType';
    return this.http.post(this.url, data);
  }


  public InsertCountryType(data: any) {
    debugger;
    this.url = this.host + '/MobileUser/InsertCountryType';
    return this.http.post(this.url, data);
  }


  public DeleteCountryType(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteCountryType?ID=" + ID);
  }

  
  public DeleteCityType(ID: any) {
    return this.http.get<any[]>(
      this.host + "/Master/DeleteCityType?ID=" + ID);
  }


  public GetLoginTypeMaster() {
    debugger
    let APIURL = this.baseURL + "Master/GetLoginTypeMaster";
    return this.http.get<any[]>(APIURL);
  }

}


