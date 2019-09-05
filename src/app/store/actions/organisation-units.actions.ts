import { createAction, props } from '@ngrx/store';
import { ErrorMessage } from 'src/app/core';
import {
  OrganisationUnitChildren,
  OrganisationUnit
} from 'src/app/models/organisation-unit.model';

/**
 * orgunit children actions
 */
export const loadOrganisationUnitChildren = createAction(
  '[ORGANISATION UNIT] load children',
  props<{ id: string }>()
);

export const loadOrganisationUnitChildrenSuccess = createAction(
  '[ORGANISATION UNIT] load children Success',
  props<{ children: OrganisationUnitChildren[] }>()
);

export const loadOrganisationUnitChildrenFail = createAction(
  '[ORGANISATION UNIT] load children Fail',
  props<{ error: ErrorMessage }>()
);

/**
 * selected orgunit actions
 */
export const selecteOrganisationUnit = createAction(
  '[ORGANISATION UNIT] select Organisation unit',
  props<{ id: string }>()
);

export const selecteOrganisationUnitFail = createAction(
  '[ORGANISATION UNIT] select Organisation unit Fail'
);

export const selecteOrganisationUnitSuccess = createAction(
  '[ORGANISATION UNIT] select Organisation unit Success',
  props<{ organisationUnit: OrganisationUnit }>()
);
