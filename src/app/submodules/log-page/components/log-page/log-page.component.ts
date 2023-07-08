// Libraries Imports
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

// Project Imports
import { Operation } from 'src/app/core/models';

// Local Imports
import { selectOperations, loadOperations } from '../../+state';

@Component({
	selector: 'app-log-page',
	templateUrl: './log-page.component.html',
	styleUrls: ['./log-page.component.scss'],
})
export class LogPageComponent {
	public operations$ = this.store.select(selectOperations);

	constructor(private store: Store) {
		this.store.dispatch(loadOperations());
	}
}
