// Libraries Imports
import { createSelector, createFeatureSelector } from '@ngrx/store';

// Local Imports
import { LogPageState, LOG_PAGE_REDUCER_KEY } from './log-page.reducer';

export const selectLogPage = createFeatureSelector<LogPageState>(LOG_PAGE_REDUCER_KEY);

export const selectOperations = createSelector(selectLogPage, (state) => state.operations);
