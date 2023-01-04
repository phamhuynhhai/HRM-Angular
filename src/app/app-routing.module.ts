import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DetailEmployeeComponent } from './detail-employee/detail-employee.component';
import { LayoutComponent } from './layout/layout.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { ListTimekeepingComponent } from './list-timekeeping/list-timekeeping.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { RoleGuardServiceGuard } from './role-guard-service.guard';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgot', component: ForgotComponent},
  { path: 'reset-password', component: ResetPasswordComponent},
  {
    path: '',
    component: LayoutComponent,
    canActivate: [RoleGuardServiceGuard],
    children: [
      {
        path: 'list-employee',
        component: ListEmployeeComponent,
      },
      {
        path: 'create-employee',
        component: CreateEmployeeComponent,
      },
      {
        path: 'list-timekeeping',
        component: ListTimekeepingComponent,
      },
      {
        path: 'detail-employee/:id',
        component: DetailEmployeeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
