// Libraries Imports
import { createAction, props } from '@ngrx/store';

// Project Imports
import { Operation } from 'src/app/core/models';

export const loadOperations = createAction('[Log Page] Load Operations');
export const loadOperationsSuccess = createAction('[Log Page] Load Operations Success', props<{ data: Operation[] }>());
export const loadOperationsFailed = createAction('[Log Page] Load Operations Failed');
