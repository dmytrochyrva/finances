// Libraries Imports
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

// Project Imports
import { Operation } from 'src/app/core/models';

// Local Imports
import { selectOperations, loadOperations } from '../../+state';

@Component({
	selector: 'app-operations-page',
	templateUrl: './operations-page.component.html',
	styleUrls: ['./operations-page.component.scss'],
})
export class OperationsPageComponent {
	public operations$ = this.store.select(selectOperations);

	constructor(private store: Store) {
		this.store.dispatch(loadOperations());
	}
}
