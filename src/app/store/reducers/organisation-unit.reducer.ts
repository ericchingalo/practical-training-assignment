import { createReducer, on } from '@ngrx/store';
import {
  initialSelectedOrgunitState,
  SelectedOrgunitState,
  initialOrganisationUnitChildrenState,
  adapter,
  OrganisationUnitChildrenState
} from '../states/organisation-unit.sate';
import {
  selectOrganisationUnitSuccess,
  selectOrganisationUnitFail,
  loadOrganisationUnitChildren,
  loadOrganisationUnitChildrenSuccess,
  loadOrganisationUnitChildrenFail,
  clearOrganisationUnitChildren
} from '../actions';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';

/**
 * selected orgunit reducer
 */
export const orgunitReducer = createReducer(
  initialSelectedOrgunitState,
  on(selectOrganisationUnitSuccess, (state, { organisationUnit }) => ({
    ...state,
    selectedOrgunit: organisationUnit,
    selected: true
  })),
  on(selectOrganisationUnitFail, state => ({ ...state, selected: false }))
);

export function selectedOrganisationUnitReducer(
  state,
  action
): SelectedOrgunitState {
  return orgunitReducer(state, action);
}

/**
 * orgunit children reducer
 */
export const orgunitChildrenReducer = createReducer(
  initialOrganisationUnitChildrenState,
  on(loadOrganisationUnitChildren, state => ({
    ...state,
    ...loadingBaseState
  })),
  on(loadOrganisationUnitChildrenSuccess, (state, { children }) =>
    adapter.addMany(children, { ...state, ...loadedBaseState })
  ),
  on(loadOrganisationUnitChildrenFail, (state, { error }) => ({
    ...state,
    ...errorBaseState,
    error
  })),
  on(clearOrganisationUnitChildren, state => adapter.removeAll(state))
);

export function organisationUnitChildrenReducer(
  state,
  action
): OrganisationUnitChildrenState {
  return orgunitChildrenReducer(state, action);
}
