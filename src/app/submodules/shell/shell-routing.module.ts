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
				path: 'log',
				loadChildren: () => import('src/app/submodules/log-page/log-page.module').then((m) => m.LogPageModule),
			},
			{
				path: 'dashboard',
				loadChildren: () =>
					import('src/app/submodules/dashboard-page/dashboard-page.module').then((m) => m.DashboardPageModule),
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ShellRoutingModule {}
