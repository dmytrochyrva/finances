// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Local Imports
import { LogPageComponent } from './components/log-page/log-page.component';
import { LogPageRoutingModule } from './log-page-routing.module';

@NgModule({
	declarations: [LogPageComponent],
	imports: [CommonModule, LogPageRoutingModule],
})
export class LogPageModule {}
