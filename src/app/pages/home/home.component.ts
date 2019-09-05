import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { selecteOrganisationUnitSuccess } from 'src/app/store/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  orgUnitFilterConfig: any;
  constructor(private router: Router, private store: Store<State>) {}

  ngOnInit() {
    this.orgUnitFilterConfig = {
      singleSelection: true,
      showUserOrgUnitSection: false,
      updateOnSelect: true,
      showOrgUnitLevelGroupSection: false
    };
  }

  onOrgUnitUpdate(orgunitData: any, action: string) {
    console.log(orgunitData.items[0]);
    const selectedOrganisationUnit = orgunitData.items[0];
    this.store.dispatch(
      selecteOrganisationUnitSuccess({
        organisationUnit: selectedOrganisationUnit
      })
    );
    this.router.navigate([`/orgunit/${selectedOrganisationUnit.id}`]);
  }
}
