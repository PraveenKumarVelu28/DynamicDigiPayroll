import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyAdjustmentFormComponent } from './Pages/otherpages/company-adjustment-form/company-adjustment-form.component';
import { PayRollFormComponent } from './Pages/otherpages/pay-roll-form/pay-roll-form.component';
import { PhilHealthFormComponent } from './Pages/otherpages/phil-health-form/phil-health-form.component';
import { SssFormComponent } from './Pages/otherpages/sss-form/sss-form.component';
import { UserFormComponent } from './Pages/otherpages/user-form/user-form.component';
import { BankFormComponent } from './Pages/otherpages/bank-form/bank-form.component';
import { PayGroupFormComponent } from './Pages/otherpages/pay-group-form/pay-group-form.component';
import { DepartmentFormComponent } from './Pages/department-form/department-form.component';
import { CostCenterFormComponent } from './Pages/otherpages/cost-center-form/cost-center-form.component';
import { OtRatesFormComponent } from './Pages/otherpages/ot-rates-form/ot-rates-form.component';
import { AdjustmentFormComponent } from './Pages/otherpages/adjustment-form/adjustment-form.component';
import { AdjustmentComponent } from './Pages/Attendence/adjustment/adjustment.component';
import { AdolfoComponent } from './Pages/otherpages/adolfo/adolfo.component';
import { BankComponent } from './Pages/Attendence/bank/bank.component';
import { CompanyAdjustmentComponent } from './Pages/Attendence/company-adjustment/company-adjustment.component';
import { CostCenterComponent } from './Pages/otherpages/cost-center/cost-center.component';
import { EmployeeComponent } from './Pages/otherpages/employee/employee.component';
import { GovernmentComponent } from './Pages/otherpages/government/government.component';
import { OtRatesComponent } from './Pages/Attendence/ot-rates/ot-rates.component';
import { PayGroupComponent } from './Pages/Attendence/pay-group/pay-group.component';
import { PhillHealthComponent } from './Pages/Attendence/phill-health/phill-health.component';
import { SSSComponent } from './Pages/otherpages/sss/sss.component';
import { TaxTableComponent } from './Pages/tax-table/tax-table.component'
import { UserComponent } from './Pages/Attendence/user/user.component';
import { CompanyProfileComponent } from './Pages/company-profile/company-profile.component';
import { DepartmentComponent } from './Pages/department/department.component';
import { PayrollComponent } from './Pages/Attendence/payroll/payroll.component';
import { HelpComponent } from './Pages/help/help.component';
import { EmployeeFormComponent } from './Pages/otherpages/employee-form/employee-form.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { AttendenceDetailsComponent } from './Pages/Attendence/attendence-details/attendence-details.component';
import { OvertimeDetailsComponent } from './Pages/Attendence/overtime-details/overtime-details.component';
import { RegularisationDetailsComponent } from './Pages/Attendence/regularisation-details/regularisation-details.component';
import { WeeklyShiftComponent } from './Pages/Attendence/weekly-shift/weekly-shift.component';
import { AttendenceReportComponent } from './Pages/Attendence/attendence-report/attendence-report.component';
import { GeneratePayslipComponent } from './Pages/Attendence/generate-payslip/generate-payslip.component';
import { LeaveReportComponent } from './Pages/Attendence/leave-report/leave-report.component';
import { OvertimeReportComponent } from './Pages/Attendence/overtime-report/overtime-report.component';
import { PayrollReportComponent } from './Pages/Attendence/payroll-report/payroll-report.component';
import { StaffReportComponent } from './Pages/Attendence/staff-report/staff-report.component'
import { LeaveListDashboardComponent } from './Pages/leave-list-dashboard/leave-list-dashboard.component';
import { ApplyLeaveComponent } from './Pages/otherpages/apply-leave/apply-leave.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { TaxtableAnnualComponent } from './taxtable-annual/taxtable-annual.component';
import { CompanyDashboardComponent } from './Pages/company-dashboard/company-dashboard.component';
import { LeaveTypeDashboardComponent } from './leave-type-dashboard/leave-type-dashboard.component';
import { LeaveTypeFornComponent } from './leave-type-forn/leave-type-forn.component';
import { StateMasterComponent } from './state-master/state-master.component';
import { StateMasterDashComponent } from './state-master-dash/state-master-dash.component';
import { CountryMasterComponent } from './country-master/country-master.component';
import { CountryMasterDashComponent } from './country-master-dash/country-master-dash.component';
import { CityMasterComponent } from './city-master/city-master.component';
import { CityMasterDashComponent } from './city-master-dash/city-master-dash.component';
import { UpdatecompanyprofileComponent } from './updatecompanyprofile/updatecompanyprofile.component';
import { UpdateBankComponent } from './update-bank/update-bank.component';
import { CurrencyMasterComponent } from './currency-master/currency-master.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PayrollSummaryReportComponent } from './payroll-summary-report/payroll-summary-report.component';
import { CurrencyMasterFormComponent } from './currency-master-form/currency-master-form.component';
import { PaySlipReportComponent } from './pay-slip-report/pay-slip-report.component';
import { CertificateOfLoanComponent } from './certificate-of-loan/certificate-of-loan.component';
import { M1excelComponent } from './m1excel/m1excel.component';
import { M1mcrfComponent } from './m1mcrf/m1mcrf.component';

import { SSSR3ReportComponent } from './sssr3-report/sssr3-report.component';
import { MonthlySummaryReportComponent } from './monthly-summary-report/monthly-summary-report.component';
import { CertificateOfContributionComponent } from './certificate-of-contribution/certificate-of-contribution.component';
import { RFreportComponent } from './rfreport/rfreport.component';
import { ER2Component } from './er2/er2.component';
import { RF1PDFComponent } from './rf1-pdf/rf1-pdf.component'
import { YTDReportAdjustmentComponent } from './ytdreport-adjustment/ytdreport-adjustment.component';
import { YTDReportComponent } from './ytdreport/ytdreport.component';
import { SSSR5ReportComponent } from './sssr5-report/sssr5-report.component';
import { SSSLMSComponent } from './ssslms/ssslms.component';
import { SSSAMSCCLReportComponent } from './sssamscclreport/sssamscclreport.component';

import { AdjustmentGenerateReportComponent } from './adjustment-generate-report/adjustment-generate-report.component';
import { SSSML1ReportComponent } from './sssml1-report/sssml1-report.component';
import { SSSRL1ReportComponent } from './sssrl1-report/sssrl1-report.component';
import { PagibigSTLRFComponent } from './pagibig-stlrf/pagibig-stlrf.component';
import { PagibigSTLRFExcelComponent } from './pagibig-stlrfexcel/pagibig-stlrfexcel.component';
import { PreliminaryReportComponent } from './preliminary-report/preliminary-report.component';
import { UserFormPreFillComponent } from './user-form-pre-fill/user-form-pre-fill.component';
import { UserResetComponent } from './user-reset/user-reset.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },

  { path: 'PagibigSTLRF', component: PagibigSTLRFComponent },
  { path: 'SSSML1Report', component: SSSML1ReportComponent },
  { path: 'SSSRL1Report', component: SSSRL1ReportComponent },
  { path: 'SSSAMSCCLReport', component: SSSAMSCCLReportComponent },
  { path: 'SSSLMSReport', component: SSSLMSComponent },
  { path: 'SSSR5Report', component: SSSR5ReportComponent },
  { path: 'SSSR3Report', component: SSSR3ReportComponent },
  { path: 'PagibigSTLRFExcel', component: PagibigSTLRFExcelComponent },
  {
    path: "Login", component: LoginPageComponent
  },
  {
    path: "CompanyProfile", component: CompanyProfileComponent
  },
  {
    path: "sssForm", component: SssFormComponent
  },
  {
    path: "sssForm/:id", component: SssFormComponent
  },
  {
    path: "PayRollForm", component: PayRollFormComponent
  },
  {
    path: "PayRollForm/:id", component: PayRollFormComponent
  },
  {
    path: "UserForm", component: UserFormComponent
  },
  {
    path: "PhilHealthForm", component: PhilHealthFormComponent
  },
  {
    path: "PhilHealthForm/:id", component: PhilHealthFormComponent
  },
  {
    path: "CompanyAdjustmentForm", component: CompanyAdjustmentFormComponent
  },
  {
    path: "CompanyAdjustmentForm/:id", component: CompanyAdjustmentFormComponent
  },
  {
    path: "BankForm", component: BankFormComponent
  },
  {
    path: "BankForm/:id", component: BankFormComponent
  },
  {
    path: "PayGroupForm", component: PayGroupFormComponent
  },
  {
    path: "PayGroupForm/:id", component: PayGroupFormComponent
  },
  {
    path: "DepartmentForm", component: DepartmentFormComponent
  },
  {
    path: "CostCenterForm", component: CostCenterFormComponent
  },
  {
    path: "CostCenterForm/:id", component: CostCenterFormComponent
  },
  {
    path: "OtRatesForm", component: OtRatesFormComponent
  },
  {
    path: "OtRatesForm/:id", component: OtRatesFormComponent
  },
  {
    path: "AdjustmentForm", component: AdjustmentFormComponent
  },
  {
    path: "AdjustmentForm/:id", component: AdjustmentFormComponent
  },
  {
    path: "EmployeeForm", component: EmployeeFormComponent
  },
  {
    path: "Help", component: HelpComponent
  },
  {
    path: "LeaveListDashboard", component: LeaveListDashboardComponent
  },
  {
    path: "ApplyLeave", component: ApplyLeaveComponent
  },
  { path: 'Department', component: DepartmentComponent },
  { path: 'DepartmentForm/:id', component: DepartmentFormComponent },
  { path: 'CompanyAdjustment', component: CompanyAdjustmentComponent },
  { path: 'CompanyDashboard', component: CompanyDashboardComponent },
  { path: 'PayRoll', component: PayrollComponent },
  { path: 'Employee', component: EmployeeComponent },
  { path: 'Government', component: GovernmentComponent },
  { path: 'OtRates', component: OtRatesComponent },
  { path: 'PayGroup', component: PayGroupComponent },
  { path: 'PhillHealth', component: PhillHealthComponent },
  { path: 'SSS', component: SSSComponent },
  { path: 'Bank', component: BankComponent },
  { path: 'Adjustment', component: AdjustmentComponent },
  { path: 'CostCenter', component: CostCenterComponent },
  { path: 'TaxTable', component: TaxTableComponent },
  { path: 'TaxTable/:id', component: TaxTableComponent },
  { path: 'User', component: UserComponent },
  { path: 'Adolfo', component: AdolfoComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'AttendenceDetails', component: AttendenceDetailsComponent },
  { path: 'OvertimeDetails', component: OvertimeDetailsComponent },
  { path: 'RegularisationDetails', component: RegularisationDetailsComponent },
  { path: 'WeeklyShift', component: WeeklyShiftComponent },
  { path: 'AttendenceReport', component: AttendenceReportComponent },
  { path: 'GeneratePayslip', component: GeneratePayslipComponent },
  { path: 'LeaveReport', component: LeaveReportComponent },
  { path: 'OvertimeReport', component: OvertimeReportComponent },
  { path: 'PayrollReportComponent', component: PayrollReportComponent },
  { path: ' StaffReportComponent', component: StaffReportComponent },
  { path: 'EmployeeDashboard', component: EmployeeDashboardComponent },
  { path: 'EmployeeForm/:id', component: EmployeeFormComponent },
  { path: 'StaffReportComponent', component: StaffReportComponent },
  { path: 'TaxtableAnnual', component: TaxtableAnnualComponent },
  { path: 'LeaveTypeDashboard', component: LeaveTypeDashboardComponent },
  { path: 'LeaveTypeForn', component: LeaveTypeFornComponent },
  { path: 'LeaveTypeForn/:id', component: LeaveTypeFornComponent },
  { path: 'StateMaster', component: StateMasterComponent },
  { path: 'StateMasterDash', component: StateMasterDashComponent },
  { path: 'CountryMaster', component: CountryMasterComponent },
  { path: 'CountryMasterDash', component: CountryMasterDashComponent },
  { path: 'CityMaster', component: CityMasterComponent },
  { path: 'CityMasterDash', component: CityMasterDashComponent },
  { path: 'CurrencyMaster', component: CurrencyMasterComponent },
  { path: 'StaffReportComponent', component: StaffReportComponent },
  { path: 'TaxtableAnnual', component: TaxtableAnnualComponent },
  { path: 'LeaveTypeDashboard', component: LeaveTypeDashboardComponent },
  { path: 'LeaveTypeForn', component: LeaveTypeFornComponent },
  { path: 'LeaveTypeForn/:id', component: LeaveTypeFornComponent },
  { path: 'StateMaster', component: StateMasterComponent },
  { path: 'StateMasterDash', component: StateMasterDashComponent },
  { path: 'CountryMasterDash', component: CountryMasterDashComponent },
  { path: 'CityMaster', component: CityMasterComponent },
  { path: 'CityMasterDash', component: CityMasterDashComponent },
  { path: 'PaySlipReport', component: PaySlipReportComponent },
  { path: 'CertificateOfLoan', component: CertificateOfLoanComponent },
  { path: 'M1excel', component: M1excelComponent },
  { path: 'M1mcrf', component: M1mcrfComponent },
  { path: 'UserFormPreFill', component: UserFormPreFillComponent },
  { path: 'UserReset', component: UserResetComponent },



  { path: 'CurrencyMaster', component: CurrencyMasterComponent },
  { path: 'StaffReportComponent', component: StaffReportComponent },
  { path: 'TaxtableAnnual', component: TaxtableAnnualComponent },
  { path: 'Updatecompanyprofile', component: UpdatecompanyprofileComponent },
  { path: 'UpdateBank', component: UpdateBankComponent },
  { path: 'CurrencyMaster', component: CurrencyMasterComponent },
  { path: 'PayrollSummaryReport', component: PayrollSummaryReportComponent },
  { path: 'CurrencyMasterForm', component: CurrencyMasterFormComponent },
  { path: 'MonthlySummaryReport', component: MonthlySummaryReportComponent },
  { path: 'CertificateOfContribution', component: CertificateOfContributionComponent },
  { path: 'ER2', component: ER2Component },
  { path: 'RFreport', component: RFreportComponent },
  { path: 'RF1PDF', component: RF1PDFComponent },
  { path: 'YTDReportAdjustment', component: YTDReportAdjustmentComponent },
  { path: 'YTDReport', component: YTDReportComponent },
  { path: 'AdjustmentGenerateReport', component: AdjustmentGenerateReportComponent },
  { path: 'PreliminaryReport', component: PreliminaryReportComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
