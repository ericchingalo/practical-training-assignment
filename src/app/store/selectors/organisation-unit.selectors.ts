import { createSelector } from '@ngrx/store';
import { getRootState, State } from '../reducers';
import {
  SelectedOrgunitState,
  selectAllOrgunitChildren
} from '../states/organisation-unit.sate';

/**
 * selected ogunit selectors
 */
export const getOrganisationUnitState = createSelector(
  getRootState,
  (state: State) => state.selectedOrganisationUnit
);

export const getSelectedOrganisationUnit = createSelector(
  getOrganisationUnitState,
  (state: SelectedOrgunitState) => state.selectedOrgunit
);

export const getSelectedOrganisationUnitStatus = createSelector(
  getOrganisationUnitState,
  (state: SelectedOrgunitState) => state.selected
);

/**
 * orgunit children selectors
 */
export const getOrganisationUnitChildrenState = createSelector(
  getRootState,
  (state: State) => state.organisationUnitChildren
);

export const OrganisationUnitChildren = createSelector(
  getOrganisationUnitChildrenState,
  selectAllOrgunitChildren
);
