import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  OrganisationUnit,
  OrganisationUnitChildren
} from 'src/app/models/organisation-unit.model';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getSelectedOrganisationUnit,
  getSelectedOrganisationUnitStatus,
  getOrganisationUnitChildren,
  getOrganisationUnitChildrenLoadedState
} from 'src/app/store/selectors/organisation-unit.selectors';

@Component({
  selector: 'app-orgnisation-unit-details',
  templateUrl: './orgnisation-unit-details.component.html',
  styleUrls: ['./orgnisation-unit-details.component.css']
})
export class OrgnisationUnitDetailsComponent implements OnInit {
  selectedOrganisationUnit$: Observable<OrganisationUnit>;
  selectedOrganisationUnitStatus$: Observable<boolean>;
  organisationUnitChildren$: Observable<OrganisationUnitChildren[]>;
  organisationUnitChildrenLoaded$: Observable<boolean>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.selectedOrganisationUnit$ = this.store.select(
      getSelectedOrganisationUnit
    );
    this.selectedOrganisationUnitStatus$ = this.store.select(
      getSelectedOrganisationUnitStatus
    );
    this.organisationUnitChildren$ = this.store.select(
      getOrganisationUnitChildren
    );
    this.organisationUnitChildrenLoaded$ = this.store.select(
      getOrganisationUnitChildrenLoadedState
    );
  }
}
