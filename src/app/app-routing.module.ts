// Libraries Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', loadChildren: () => import('src/app/submodules/shell/shell.module').then((m) => m.ShellModule) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
