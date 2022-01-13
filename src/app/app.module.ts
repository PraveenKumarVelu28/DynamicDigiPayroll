import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentComponent } from './Pages/department/department.component';
import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';
import { HeaderComponent } from './Pages/header/header.component';
import { SssFormComponent } from './Pages/otherpages/sss-form/sss-form.component';
import { PayRollFormComponent } from './Pages/otherpages/pay-roll-form/pay-roll-form.component';
import { UserFormComponent } from './Pages/otherpages/user-form/user-form.component';
import { PhilHealthFormComponent } from './Pages/otherpages/phil-health-form/phil-health-form.component';
import { CompanyAdjustmentFormComponent } from './Pages/otherpages/company-adjustment-form/company-adjustment-form.component';
import { BankFormComponent } from './Pages/otherpages/bank-form/bank-form.component';
import { PayGroupFormComponent } from './Pages/otherpages/pay-group-form/pay-group-form.component';
import { DepartmentFormComponent } from './Pages/department-form/department-form.component';
import { CostCenterFormComponent } from './Pages/otherpages/cost-center-form/cost-center-form.component';
import { OtRatesFormComponent } from './Pages/otherpages/ot-rates-form/ot-rates-form.component';
import { AdjustmentFormComponent } from './Pages/otherpages/adjustment-form/adjustment-form.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HelpComponent } from './Pages/help/help.component';
import { EmployeeFormComponent } from './Pages/otherpages/employee-form/employee-form.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { AttendenceDetailsComponent } from './Pages/Attendence/attendence-details/attendence-details.component';
import { OvertimeDetailsComponent } from './Pages/Attendence/overtime-details/overtime-details.component';
import { RegularisationDetailsComponent } from './Pages/Attendence/regularisation-details/regularisation-details.component';
import { WeeklyShiftComponent } from './Pages/Attendence/weekly-shift/weekly-shift.component';
import { AttendenceReportComponent } from './Pages/Attendence/attendence-report/attendence-report.component';
import { LeaveReportComponent } from './Pages/Attendence/leave-report/leave-report.component';
import { PayrollReportComponent } from './Pages/Attendence/payroll-report/payroll-report.component';
import { GeneratePayslipComponent } from './Pages/Attendence/generate-payslip/generate-payslip.component';
import { StaffReportComponent } from './Pages/Attendence/staff-report/staff-report.component';
import { OvertimeReportComponent } from './Pages/Attendence/overtime-report/overtime-report.component';
import { LeaveListDashboardComponent } from './Pages/leave-list-dashboard/leave-list-dashboard.component';
import { CostCenterComponent } from './Pages/otherpages/cost-center/cost-center.component';
import { ApplyLeaveComponent } from './Pages/otherpages/apply-leave/apply-leave.component';
import { BankComponent } from './Pages/Attendence/bank/bank.component';
import { PayGroupComponent } from './Pages/Attendence/pay-group/pay-group.component';
import { OtRatesComponent } from './Pages/Attendence/ot-rates/ot-rates.component';
import { CompanyAdjustmentComponent } from './Pages/Attendence/company-adjustment/company-adjustment.component';
import { PhillHealthComponent } from './Pages/Attendence/phill-health/phill-health.component';
import { SSSComponent } from './Pages/otherpages/sss/sss.component';
import { AdjustmentComponent } from './Pages/Attendence/adjustment/adjustment.component';
import { UserComponent } from './Pages/Attendence/user/user.component';
import { PayrollComponent } from './Pages/Attendence/payroll/payroll.component';
import { NgWizardConfig, NgWizardModule, THEME } from 'ng-wizard';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { NgxFullCalendarModule } from '../../node_modules/ngx-fullcalendar';
import { TaxtableAnnualComponent } from './taxtable-annual/taxtable-annual.component';
import { CompanyDashboardComponent } from './Pages/company-dashboard/company-dashboard.component';
import { LeaveTypeDashboardComponent } from './leave-type-dashboard/leave-type-dashboard.component';
import { LeaveTypeFornComponent } from './leave-type-forn/leave-type-forn.component';
import { StateMasterDashComponent } from './state-master-dash/state-master-dash.component';
import { StateMasterComponent } from './state-master/state-master.component';
import { CityMasterDashComponent } from './city-master-dash/city-master-dash.component';
import { CityMasterComponent } from './city-master/city-master.component';
import { CountryMasterDashComponent } from './country-master-dash/country-master-dash.component';
import { CountryMasterComponent } from './country-master/country-master.component';
import { UpdatecompanyprofileComponent } from './updatecompanyprofile/updatecompanyprofile.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { CurrencyMasterComponent } from './currency-master/currency-master.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PayrollSummaryReportComponent } from './payroll-summary-report/payroll-summary-report.component';
import { CurrencyMasterFormComponent } from './currency-master-form/currency-master-form.component';
import { PaySlipReportComponent } from './pay-slip-report/pay-slip-report.component';
import { CertificateOfLoanComponent } from './certificate-of-loan/certificate-of-loan.component';
import { M1mcrfComponent } from './m1mcrf/m1mcrf.component';
import { M1excelComponent } from './m1excel/m1excel.component';
import { SSSR3ReportComponent } from './sssr3-report/sssr3-report.component';
import { SSSR5ReportComponent } from './sssr5-report/sssr5-report.component';
import { SSSLMSComponent } from './ssslms/ssslms.component';
import { SSSAMSCCLReportComponent } from './sssamscclreport/sssamscclreport.component';
import { SSSML1ReportComponent } from './sssml1-report/sssml1-report.component';
import { SSSRL1ReportComponent } from './sssrl1-report/sssrl1-report.component';
import { MonthlySummaryReportComponent } from './monthly-summary-report/monthly-summary-report.component';
import { YTDReportComponent } from './ytdreport/ytdreport.component';
import { YTDReportAdjustmentComponent } from './ytdreport-adjustment/ytdreport-adjustment.component';
import { PagibigSTLRFComponent } from './pagibig-stlrf/pagibig-stlrf.component';
import { PagibigSTLRFExcelComponent } from './pagibig-stlrfexcel/pagibig-stlrfexcel.component';
import { CertificateOfContributionComponent } from './certificate-of-contribution/certificate-of-contribution.component';
import { ER2Component } from './er2/er2.component';
import { RFreportComponent } from './rfreport/rfreport.component';
import { RF1PDFComponent } from './rf1-pdf/rf1-pdf.component';
import { UserFormPreFillComponent } from './user-form-pre-fill/user-form-pre-fill.component';
import { UserResetComponent } from './user-reset/user-reset.component';
import { AdjustmentGenerateReportComponent } from './adjustment-generate-report/adjustment-generate-report.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PreliminaryReportComponent } from './preliminary-report/preliminary-report.component';
import { RF1PDFNewComponent } from './rf1-pdfnew/rf1-pdfnew.component';
import { R1aFormComponent } from './r1a-form/r1a-form.component';
import { M11MCRFComponent } from './m11-mcrf/m11-mcrf.component';
import { GovernmentComponent } from './Pages/otherpages/government/government.component';
import { Bir1601CComponent } from './bir1601-c/bir1601-c.component';
import { Bir1601EQComponent } from './bir1601-eq/bir1601-eq.component';
import { Bir1604CComponent } from './bir1604-c/bir1604-c.component';
import { Bir1604CFComponent } from './bir1604-cf/bir1604-cf.component';
import { Bir2316Component } from './bir2316/bir2316.component';
import { Bir2306Component } from './bir2306/bir2306.component';
import { Bir2307Component } from './bir2307/bir2307.component';
import { BirAnnualizationComponent } from './bir-annualization/bir-annualization.component';
import { Biralphalist6Component } from './biralphalist6/biralphalist6.component';
import { Biralphalist7Component } from './biralphalist7/biralphalist7.component';
import { PagibigSTLRComponent } from './pagibig-stlr/pagibig-stlr.component';


const ngWizardConfig: NgWizardConfig = {
  theme: THEME.circles
};


@NgModule({
  declarations: [
    AppComponent,
    CompanyProfileComponent,
    DepartmentComponent,
    HeaderComponent,
    SssFormComponent,
    PayRollFormComponent,
    UserFormComponent,
    PhilHealthFormComponent,
    CompanyAdjustmentFormComponent,
    BankFormComponent,
    PayGroupFormComponent,
    DepartmentFormComponent,
    CostCenterFormComponent,
    OtRatesFormComponent,
    AdjustmentFormComponent,
    EmployeeFormComponent,
    FooterComponent,
    HelpComponent,
    EmployeeFormComponent,
    AttendenceDetailsComponent,
    OvertimeDetailsComponent,
    RegularisationDetailsComponent,
    WeeklyShiftComponent,
    AttendenceReportComponent,
    LeaveReportComponent,
    PayrollReportComponent,
    GeneratePayslipComponent,
    StaffReportComponent,
    OvertimeReportComponent,
    LeaveListDashboardComponent,
    ApplyLeaveComponent,
    CostCenterComponent,
    BankComponent,
    PayGroupComponent,
    OtRatesComponent,
    CompanyAdjustmentComponent,
    PhillHealthComponent,
    SSSComponent,
    AdjustmentComponent,
    UserComponent,
    PayrollComponent,
    EmployeeDashboardComponent,
    TaxtableAnnualComponent,
    CompanyDashboardComponent,
    LeaveTypeDashboardComponent,
    LeaveTypeFornComponent,
    StateMasterDashComponent,
    StateMasterComponent,
    CityMasterDashComponent,
    CityMasterComponent,
    CountryMasterDashComponent,
    CountryMasterComponent,
    CurrencyMasterComponent,
    UpdatecompanyprofileComponent,
    UpdateBankComponent,
    CurrencyMasterComponent,
    LoginPageComponent,
    CurrencyMasterFormComponent,
    PaySlipReportComponent,
    CertificateOfLoanComponent,
    M1mcrfComponent,
    M1excelComponent,
    PayrollSummaryReportComponent,
    CurrencyMasterFormComponent,
    SSSR3ReportComponent,
    SSSR5ReportComponent,
    SSSLMSComponent,
    SSSAMSCCLReportComponent,
    SSSML1ReportComponent,
    SSSRL1ReportComponent,
    MonthlySummaryReportComponent,
    YTDReportComponent,
    YTDReportAdjustmentComponent,
    PagibigSTLRFComponent,
    PagibigSTLRFExcelComponent,
    CertificateOfContributionComponent,
    ER2Component,
    RFreportComponent,
    RF1PDFComponent,
    UserFormPreFillComponent,
    UserResetComponent,
    AdjustmentGenerateReportComponent,
    SpinnerComponent,
    PreliminaryReportComponent,
    RF1PDFNewComponent,
    R1aFormComponent,
    M11MCRFComponent,
    GovernmentComponent,
    Bir1601CComponent,
    Bir1601EQComponent,
    Bir1604CComponent,
    Bir1604CFComponent,
    Bir2316Component,
    Bir2306Component,
    Bir2307Component,
    BirAnnualizationComponent,
    Biralphalist6Component,
    Biralphalist7Component,
    PagibigSTLRComponent,

  ],
  imports: [
    NgbModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule,
    NgxFullCalendarModule,
    HttpClientModule,
    NgWizardModule.forRoot(ngWizardConfig),
    NgxPaginationModule
  ],
  providers: [HttpClient],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
