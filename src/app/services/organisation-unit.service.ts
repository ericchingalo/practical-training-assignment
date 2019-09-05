import { Injectable } from '@angular/core';
import { NgxDhis2HttpClientService } from '@iapps/ngx-dhis2-http-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrganisationUnitService {
  constructor(private httpServuice: NgxDhis2HttpClientService) {}

  getOrgunitChildren(orgunitId: string): Observable<any> {
    return this.httpServuice.get(
      `organisationUnits/${orgunitId}.json?fields=children[id,level,lastUpdated,name,shortName,children[id,name]]`
    );
  }
}
