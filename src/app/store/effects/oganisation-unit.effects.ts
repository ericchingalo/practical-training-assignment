import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { OrganisationUnitService } from 'src/app/services/organisation-unit.service';
import {
  selectOrganisationUnitSuccess,
  loadOrganisationUnitChildrenSuccess,
  loadOrganisationUnitChildrenFail,
  loadOrganisationUnitChildren,
  editOrganisationUnitChild,
  editOrganisationUnitChildSuccess,
  editOrganisationUnitChildFail,
  deleteOrganisationUnitChild,
  deleteOrganisationUnitChildSuccess,
  deleteOrganisationUnitChildFail
} from '../actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class OrganisationUnitEffects {
  constructor(
    private actions$: Actions,
    private orgunitService: OrganisationUnitService,
    private router: Router
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

  editOrganisationUnitChild$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editOrganisationUnitChild),
      switchMap(action => {
        console.log(action);
        return this.orgunitService.editOrgunitChildren(action.child).pipe(
          map(() => {
            this.router.navigate([
              `/organisationunit/${action.child.parent.id}`
            ]);
            return editOrganisationUnitChildSuccess({
              child: { id: action.child.id, changes: action.child }
            });
          }),
          catchError(error =>
            of(editOrganisationUnitChildFail({ error: error }))
          )
        );
      })
    )
  );

  deleteOrganisationUnitChild$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteOrganisationUnitChild),
      switchMap(action =>
        this.orgunitService.deleteOrgunitChild(action.id).pipe(
          map(() => deleteOrganisationUnitChildSuccess({ id: action.id })),
          catchError(error =>
            of(deleteOrganisationUnitChildFail({ error: error }))
          )
        )
      )
    )
  );
}
