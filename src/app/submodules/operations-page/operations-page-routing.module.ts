// Libraries Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Local Imports
import { OperationsPageComponent } from './components/operations-page/operations-page.component';

const routes: Routes = [{ path: '', component: OperationsPageComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class OperationsPageRoutingModule {}
