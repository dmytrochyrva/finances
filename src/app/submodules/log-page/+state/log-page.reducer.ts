// Libraries Imports
import { createReducer, on } from '@ngrx/store';

// Project Imports
import { Operation } from 'src/app/core/models';

// Local Imports
import { loadOperations, loadOperationsFailed, loadOperationsSuccess } from './log-page.actions';

export const LOG_PAGE_REDUCER_KEY = 'logPage';

export interface LogPageState {
	operations: Operation[];
}

export const initialState = {
	operatoins: null,
};

export const logPageReducer = createReducer(
	initialState,
	on(loadOperations, (state) => ({ ...state, operations: null })),
	on(loadOperationsSuccess, (state, action) => ({ ...state, operations: action.data })),
	on(loadOperationsFailed, (state) => ({ ...state, operatoins: null })),
);
