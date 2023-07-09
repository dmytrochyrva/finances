// Libraries Imports
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
	public user$ = this.auth.user$;

	constructor(private auth: AuthService) {}

	public logOut(): void {
		this.auth.logout();
	}
}
