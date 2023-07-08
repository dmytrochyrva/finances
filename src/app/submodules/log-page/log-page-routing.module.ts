// Libraries Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local Imports
import { LogPageComponent } from './components/log-page/log-page.component';

const routes: Routes = [{ path: '', component: LogPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LogPageRoutingModule {}
