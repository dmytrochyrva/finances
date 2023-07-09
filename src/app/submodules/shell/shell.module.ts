// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project Imports
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Local Imports
import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './components/shell/shell.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
	declarations: [ShellComponent, NavbarComponent, SidebarComponent],
	imports: [CommonModule, ShellRoutingModule, CoreModule, SharedModule],
})
export class ShellModule {}
