import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { CartComponent } from './payment/cart/cart.component';
import { EmitterparentComponent } from './components/emitterparent/emitterparent.component';
import { EmitterchildComponent } from './components/emitterchild/emitterchild.component';

const routes: Routes =[
  { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  {
    path: 'home', component: HomeComponent, //canActivate: [AuthGuard]
  },
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'verify-email-address', component: VerifyEmailComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'experience', component: ExperienceComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'payment', component: CartComponent
  },
  {
    path: 'emitter', component: EmitterparentComponent
  },
  {
    path: 'emitterchild', component: EmitterchildComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
