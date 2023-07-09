// Libraries Imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NgModule, isDevMode } from '@angular/core';
import { AuthModule, AuthConfig } from '@auth0/auth0-angular';

// Local Imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const authConfig: AuthConfig = {
	domain: 'dev-sbodfrdr1rx8isb2.us.auth0.com',
	clientId: 'YjWmSHhv7tianEspKPtE4kOV0A4QJ2zF',
	authorizationParams: {
		redirect_uri: window.location.origin,
	},
};

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthModule.forRoot(authConfig),
		StoreModule.forRoot({}, {}),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
		BrowserAnimationsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
