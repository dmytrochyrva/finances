// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project Imports
import { CoreModule } from 'src/app/core/core.module';

// Local Imports
import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
	declarations: [
    ShellComponent
  ],
	imports: [CommonModule, ShellRoutingModule, CoreModule],
})
export class ShellModule {}
