// Libraries Imports
import { createReducer, on } from '@ngrx/store';

// Project Imports
import { Operation } from 'src/app/core/models';

// Local Imports
import { loadOperations, loadOperationsFailed, loadOperationsSuccess } from './operations-page.actions';

export const OPERATIONS_PAGE_REDUCER_KEY = 'operatoinsPage';

export interface OperationsPageState {
	operations: Operation[];
}

export const initialState = {
	operatoins: null,
};

export const operationsPageReducer = createReducer(
	initialState,
	on(loadOperations, (state) => ({ ...state, operations: null })),
	on(loadOperationsSuccess, (state, action) => ({ ...state, operations: action.data })),
	on(loadOperationsFailed, (state) => ({ ...state, operatoins: null })),
);
