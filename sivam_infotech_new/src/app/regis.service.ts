import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aadhar } from './aadhar';
import { Eventregis } from './eventregis';
import { Fastag } from './fastag';
import { Loginuser } from './loginuser';
import { Mobilerecharge } from './mobilerecharge';
import { Pan } from './pan';
import { Passport } from './passport';
import { Ticket } from './ticket';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class RegisService {

  _url='http://localhost:3000/registration';
  urllogin='http://localhost:3000/login';
  urleventregis='http://localhost:3000/eregis';
  aadharmod='http://localhost:3000/eregis/aadhar';
  panmod='http://localhost:3000/eregis/pan';
  passportmod='http://localhost:3000/eregis/mobilerecharge';
  mobilemod='http://localhost:3000/eregis/passport';
  fastagmod='http://localhost:3000/eregis/fastag';
  ticketmod='http://localhost:3000/eregis/aadhar';
  constructor(private _http: HttpClient) { }
  registration(userData: User)
  {
    return this._http.post<any>(this._url, userData);
  }
  userlogin(logindata: Loginuser)
  {
    return this._http.post<any>(this.urllogin, logindata);
  }
  eventregis(eventdata:Eventregis)
  {
    return this._http.post<any>(this.urleventregis, eventdata);
  }
  aadharmodservice(aadhardata:Aadhar)
  {
    return this._http.post<any>(this.aadharmod, aadhardata);
  }
  fastagservice(fastagdata:Fastag)
  {
    return this._http.post<any>(this.fastagmod, fastagdata);
  }
  mobileservice(mobiledata:Mobilerecharge)
  {
    return this._http.post<any>(this.mobilemod, mobiledata);
  }
  panservice(pandata:Pan)
  {
    return this._http.post<any>(this.panmod, pandata);
  }
  passportservice(passportdata:Passport)
  {
    return this._http.post<any>(this.passportmod, passportdata);
  }
  ticketservice(ticketdata:Ticket)
  {
    return this._http.post<any>(this.ticketmod, ticketdata);
  }
}
