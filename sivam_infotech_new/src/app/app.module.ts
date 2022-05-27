import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { EventregisComponent } from './eventregis/eventregis.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AadharComponent } from './aadhar/aadhar.component';
import { AadharComponent } from './eventregis/aadhar/aadhar.component';
import { PanComponent } from './eventregis/pan/pan.component';
import { PassportComponent } from './eventregis/passport/passport.component';
import { FastagComponent } from './eventregis/fastag/fastag.component';
import { MobilerechargeComponent } from './eventregis/mobilerecharge/mobilerecharge.component';
import { TicketbookingComponent } from './eventregis/ticketbooking/ticketbooking.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AboutComponent,
    EventComponent,
    EventregisComponent,
    HomeComponent,
    AadharComponent,
    PanComponent,
    PassportComponent,
    FastagComponent,
    MobilerechargeComponent,
    TicketbookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MdbCollapseModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
