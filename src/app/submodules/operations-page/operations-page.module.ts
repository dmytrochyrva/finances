// Libraries Imports
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

// Local Imports
import { OperationsPageComponent } from './components/operations-page/operations-page.component';
import { OperationsPageRoutingModule } from './operations-page-routing.module';
import { operationsPageReducer, OPERATIONS_PAGE_REDUCER_KEY, OperationsPageEffects } from './+state';

@NgModule({
	declarations: [OperationsPageComponent],
	imports: [
		CommonModule,
		OperationsPageRoutingModule,
		EffectsModule.forFeature([OperationsPageEffects]),
		StoreModule.forFeature(OPERATIONS_PAGE_REDUCER_KEY, operationsPageReducer),
	],
})
export class OperatoinsPageModule {}
