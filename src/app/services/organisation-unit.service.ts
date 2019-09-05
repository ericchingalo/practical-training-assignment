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
      `organisationUnits/${orgunitId}.json?ields=name,displayName,children[id,%20level,lastUpdated,name,shortName,children[id,name,level]]`
    );
  }
}
