import { Component } from '@angular/core';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
	public links = [
		{ path: 'operations', name: 'Operations', icon: 'operations.svg' },
		{ path: 'dashboard', name: 'Dashboard', icon: 'dashboard.svg' },
		{ path: 'settings', name: 'Settings', icon: 'settings.svg' },
		{ path: 'user-profile', name: 'User Profile', icon: 'user-profile.svg' },
	];
}
