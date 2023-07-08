// Libraries Imports
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

// Local Imports
import { LogPageComponent } from './components/log-page/log-page.component';
import { LogPageRoutingModule } from './log-page-routing.module';
import { logPageReducer, LOG_PAGE_REDUCER_KEY, LogPageEffects } from './+state';

@NgModule({
	declarations: [LogPageComponent],
	imports: [
		CommonModule,
		LogPageRoutingModule,
		EffectsModule.forFeature([LogPageEffects]),
		StoreModule.forFeature(LOG_PAGE_REDUCER_KEY, logPageReducer),
	],
})
export class LogPageModule {}
