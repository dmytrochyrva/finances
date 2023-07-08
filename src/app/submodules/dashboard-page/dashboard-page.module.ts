// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Local Imports
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { DashboardPageRoutingModule } from './dashboard-page-routing.module';

@NgModule({
	declarations: [DashboardPageComponent],
	imports: [CommonModule, DashboardPageRoutingModule],
})
export class DashboardPageModule {}
