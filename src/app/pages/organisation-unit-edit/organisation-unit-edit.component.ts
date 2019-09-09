import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { OrganisationUnitChildren } from 'src/app/models/organisation-unit.model';
import { getSelectedOrgunitChild } from 'src/app/store/selectors/organisation-unit.selectors';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-organisation-unit-edit',
  templateUrl: './organisation-unit-edit.component.html',
  styleUrls: ['./organisation-unit-edit.component.css']
})
export class OrganisationUnitEditComponent implements OnInit, OnDestroy {
  orgunitSubscription: Subscription;
  selectedOrgunitChild$: Observable<OrganisationUnitChildren>;
  organisationUnitForm: FormGroup;
  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.selectedOrgunitChild$ = this.store.select(getSelectedOrgunitChild(id));
    this.organisationUnitForm = this.generateForm();
  }

  ngOnDestroy() {
    this.orgunitSubscription.unsubscribe();
  }

  generateForm() {
    let orgunit: OrganisationUnitChildren = null;
    this.orgunitSubscription = this.selectedOrgunitChild$.subscribe(
      child => (orgunit = child)
    );
    return this.fb.group({
      name: new FormControl(orgunit.name, Validators.required),
      shortName: new FormControl(orgunit.shortName),
      openingDate: new FormControl(orgunit.openingDate, Validators.required),
      closedDate: new FormControl(orgunit.closedDate),
      url: new FormControl(orgunit.url),
      description: new FormControl(orgunit.description),
      comments: new FormControl(orgunit.comment),
      address: new FormControl(orgunit.address),
      email: new FormControl(orgunit.email, Validators.email),
      contactPerson: new FormControl(orgunit.contactPerson),
      code: new FormControl(orgunit.code),
      phoneNumber: new FormControl(orgunit.phoneNumber)
    });
  }

  editOrgunit(e) {
    e.stopPropagation();
    console.log(this.organisationUnitForm.value);
    this.router.navigate(['']);
  }

  onCancel(e) {
    e.stopPropagation();
    this.router.navigate(['/']);
  }
}
