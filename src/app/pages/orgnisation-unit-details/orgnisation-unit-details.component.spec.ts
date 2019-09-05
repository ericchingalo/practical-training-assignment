import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgnisationUnitDetailsComponent } from './orgnisation-unit-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from 'src/app/store/reducers';

describe('OrgnisationUnitDetailsComponent', () => {
  let component: OrgnisationUnitDetailsComponent;
  let fixture: ComponentFixture<OrgnisationUnitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        StoreModule.forRoot(reducers, { metaReducers })
      ],
      declarations: [OrgnisationUnitDetailsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgnisationUnitDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
