import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ContentManagementComponent } from './components/content-management/content-management.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MerchantComponent } from './components/merchant/merchant.component';
import { AddMerchantComponent } from './components/add-merchant/add-merchant.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PortalReportComponent } from './components/portal-report/portal-report.component';
import { RedemptionReportComponent } from './components/redemption-report/redemption-report.component';
import { UsersComponent } from './components/users/users.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { DateToggleComponent } from './components/date-toggle/date-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ContentManagementComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    MerchantComponent,
    AddMerchantComponent,
    DashboardHomeComponent,
    SettingsComponent,
    PortalReportComponent,
    RedemptionReportComponent,
    UsersComponent,
    AdminUserComponent,
    DateToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { 
        path: 'dashboard', component: DashboardComponent,
        children: [
          { path: 'home', component: DashboardHomeComponent },
          { path: 'merchant/add', component: AddMerchantComponent },
          { path: 'merchant', component: MerchantComponent },
          { path: 'settings', component: SettingsComponent },
          { path: 'report/portal', component: PortalReportComponent },
          { path: 'report/redemption', component: RedemptionReportComponent },
          { path: 'users', component: UsersComponent },
          { path: 'admin-user', component: AdminUserComponent },
          { path: '**', component: DashboardHomeComponent },

        ] 
      },

      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }