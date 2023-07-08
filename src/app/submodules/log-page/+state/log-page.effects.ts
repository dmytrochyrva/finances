// Libraries Imports
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Project Imports
import { ApiService } from 'src/app/core/services/api.service';

// Local Imports
import { loadOperations, loadOperationsFailed, loadOperationsSuccess } from './log-page.actions';

@Injectable()
export class LogPageEffects {
	public loadOperations$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadOperations),
			exhaustMap(() =>
				this.apiService.getOperations().pipe(
					map((operations) => loadOperationsSuccess({ data: operations })),
					catchError(() => of(loadOperationsFailed())),
				),
			),
		),
	);

	constructor(private actions$: Actions, private apiService: ApiService) {}
}
