import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { LayoutComponent } from './layout/layout.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListTimekeepingComponent } from './list-timekeeping/list-timekeeping.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbDropdownModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    LayoutComponent,
    CreateEmployeeComponent,
    ListTimekeepingComponent,
    DetailEmployeeComponent,
    SigninComponent,
    LogoutComponent,
    RegistrationComponent,
    ForgotComponent,
    ResetPasswordComponent
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbDropdownModule,
    BrowserAnimationsModule,
    NgbPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
