// Libraries Imports
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

// Project Imports
import { Operation } from 'src/app/core/models';

// Local Imports
import { AddOperationModalComponent } from '../add-operation-modal/add-operation-modal.component';
import { selectOperations, loadOperations } from '../../+state';

@Component({
	selector: 'app-operations-page',
	templateUrl: './operations-page.component.html',
	styleUrls: ['./operations-page.component.scss'],
})
export class OperationsPageComponent {
	public operations$ = this.store.select(selectOperations);

	private currentDay!: string;

	constructor(private store: Store, private modalService: BsModalService) {
		this.store.dispatch(loadOperations());
	}

	public openAddOperationModal(): void {
		this.modalService.show(AddOperationModalComponent, { class: 'modal-dialog-centered' });
	}

	public isTheSameDay(date: string) {
		if (date === this.currentDay) {
			return true;
		}

		this.currentDay = date;

		return false;
	}
}
