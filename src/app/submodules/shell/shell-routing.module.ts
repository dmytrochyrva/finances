// Libraries Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local Imports
import { ShellComponent } from './components/shell/shell.component';

const routes: Routes = [
	{
		path: '',
		component: ShellComponent,
		children: [
			{ path: '', redirectTo: 'log', pathMatch: 'full' },
			{
				path: 'operations',
				loadChildren: () =>
					import('src/app/submodules/operations-page/operations-page.module').then((m) => m.OperatoinsPageModule),
			},
			{
				path: 'dashboard',
				loadChildren: () =>
					import('src/app/submodules/dashboard-page/dashboard-page.module').then((m) => m.DashboardPageModule),
			},
			{
				path: 'settings',
				loadChildren: () =>
					import('src/app/submodules/operations-page/operations-page.module').then((m) => m.OperatoinsPageModule),
			},
			{
				path: 'user-profile',
				loadChildren: () =>
					import('src/app/submodules/operations-page/operations-page.module').then((m) => m.OperatoinsPageModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ShellRoutingModule {}
