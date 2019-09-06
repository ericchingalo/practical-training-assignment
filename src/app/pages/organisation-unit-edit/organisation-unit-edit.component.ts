import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrganisationUnitChildren } from 'src/app/models/organisation-unit.model';
import { getSelectedOrgunitChild } from 'src/app/store/selectors/organisation-unit.selectors';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-organisation-unit-edit',
  templateUrl: './organisation-unit-edit.component.html',
  styleUrls: ['./organisation-unit-edit.component.css']
})
export class OrganisationUnitEditComponent implements OnInit {
  selectedOrgunitChild$: Observable<OrganisationUnitChildren>;
  organisationUnitForm: FormGroup;
  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.selectedOrgunitChild$ = this.store.select(getSelectedOrgunitChild(id));
    this.organisationUnitForm = this.generateForm();
  }

  generateForm() {
    return this.fb.group({
      name: new FormControl(''),
      shortName: new FormControl(''),
      openingDate: new FormControl(''),
      closedDate: new FormControl(''),
      url: new FormControl(''),
      description: new FormControl(''),
      comments: new FormControl(''),
      address: new FormControl(''),
      email: new FormControl(''),
      contactPerson: new FormControl(''),
      code: new FormControl(''),
      phoneNumber: new FormControl('')
    });
  }
}
