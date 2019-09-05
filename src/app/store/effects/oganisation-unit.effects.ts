import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, act } from '@ngrx/effects';
import { OrganisationUnitService } from 'src/app/services/organisation-unit.service';
import {
  selectOrganisationUnitSuccess,
  loadOrganisationUnitChildrenSuccess,
  loadOrganisationUnitChildrenFail,
  loadOrganisationUnitChildren
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class OrganisationUnitEffects {
  constructor(
    private actions$: Actions,
    private orgunitService: OrganisationUnitService
  ) {}

  selectOrganisationUnit$ = createEffect(() =>
    this.actions$.pipe(
      ofType(selectOrganisationUnitSuccess),
      switchMap(action =>
        of(loadOrganisationUnitChildren({ id: action.organisationUnit.id }))
      )
    )
  );
  loadOrganisationUnitChildren$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadOrganisationUnitChildren),
      switchMap(action =>
        this.orgunitService.getOrgunitChildren(action.id).pipe(
          map(organisationUnitChildren =>
            loadOrganisationUnitChildrenSuccess({
              children: organisationUnitChildren.children
            })
          ),
          catchError(err =>
            of(loadOrganisationUnitChildrenFail({ error: err }))
          )
        )
      )
    )
  );
}
