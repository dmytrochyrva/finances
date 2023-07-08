// Libraries Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local Imports
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';

const routes: Routes = [{ path: '', component: DashboardPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
