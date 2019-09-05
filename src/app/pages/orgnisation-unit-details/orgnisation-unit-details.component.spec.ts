import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgnisationUnitDetailsComponent } from './orgnisation-unit-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('OrgnisationUnitDetailsComponent', () => {
  let component: OrgnisationUnitDetailsComponent;
  let fixture: ComponentFixture<OrgnisationUnitDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
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
