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
  getOrganisationUnitChildrenLoadedState,
  leafOrgunit
} from 'src/app/store/selectors/organisation-unit.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisation-units',
  templateUrl: './organisation-units.component.html',
  styleUrls: ['./organisation-units.component.css']
})
export class OrganisationUnitsComponent implements OnInit {
  selectedOrganisationUnit$: Observable<OrganisationUnit>;
  selectedOrganisationUnitStatus$: Observable<boolean>;
  organisationUnitChildren$: Observable<OrganisationUnitChildren[]>;
  organisationUnitChildrenLoaded$: Observable<boolean>;
  isLeafOrganisation$: Observable<boolean>;

  constructor(private store: Store<State>, private router: Router) {}

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
    this.isLeafOrganisation$ = this.store.select(leafOrgunit);
  }

  onEditChild(e, id: string) {
    e.stopPropagation();
    this.router.navigate([`edit-orgunit/${id}`]);
  }
}
