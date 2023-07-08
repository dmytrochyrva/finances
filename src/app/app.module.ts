// Libraries Imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule, isDevMode } from '@angular/core';

// Local Imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot({}, {}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
