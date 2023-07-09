// Libraries Imports
import { createSelector, createFeatureSelector } from '@ngrx/store';

// Local Imports
import { OperationsPageState, OPERATIONS_PAGE_REDUCER_KEY } from './operations-page.reducer';

export const selectLogPage = createFeatureSelector<OperationsPageState>(OPERATIONS_PAGE_REDUCER_KEY);

export const selectOperations = createSelector(selectLogPage, (state) => state.operations);
