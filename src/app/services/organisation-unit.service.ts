import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationUnitService {
  constructor(private httpServuice: NgxDhis2HttpClientService) {}
  s;
  getOrgunitChildren(orgunitId: string): Observable<any> {
    const fields =
      'fields=name,children[id,lastUpdated,displayDescription,code,closedDatchildren[id,lastUpdated,level,name,shortName,leaf,displayName,displayShortName,openingDate,coordinates,children[id,name,level]]e,contactPerson,address,email,comment,displayComment,description,phoneNumber,url,level,name,shortName,leaf,displayName,displayShortName,openingDate,coordinates,children[id,name,level]]';
    return this.httpServuice.get(
      `organisationUnits/${orgunitId}.json?fields=${fields}`
    );
  }
}
