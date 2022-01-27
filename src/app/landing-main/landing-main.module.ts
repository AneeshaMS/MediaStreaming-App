import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { LandingMainRoutingModule } from './landing-main-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginUserComponent } from './login-user/login-user.component';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { SignupUserComponent } from './signup-user/signup-user.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginUserComponent,
    VideoUploadComponent,
    SignupUserComponent
  ],
  imports: [
    CommonModule,
    LandingMainRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule
  ]
})
export class LandingMainModule { }