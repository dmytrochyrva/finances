// Libraries Imports
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

// Project Imports
import { SharedModule } from 'src/app/shared/shared.module';

// Local Imports
import { OperationsPageComponent } from './components/operations-page/operations-page.component';
import { OperationsPageRoutingModule } from './operations-page-routing.module';
import { operationsPageReducer, OPERATIONS_PAGE_REDUCER_KEY, OperationsPageEffects } from './+state';
import { AddOperationModalComponent } from './components/add-operation-modal/add-operation-modal.component';

@NgModule({
	declarations: [OperationsPageComponent, AddOperationModalComponent],
	imports: [
		CommonModule,
		SharedModule,
		OperationsPageRoutingModule,
		EffectsModule.forFeature([OperationsPageEffects]),
		StoreModule.forFeature(OPERATIONS_PAGE_REDUCER_KEY, operationsPageReducer),
	],
})
export class OperatoinsPageModule {}
