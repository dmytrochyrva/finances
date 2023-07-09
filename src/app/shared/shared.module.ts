// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';

@NgModule({
	declarations: [SvgIconComponent],
	imports: [CommonModule, BsDropdownModule],
	exports: [SvgIconComponent, BsDropdownModule],
})
export class SharedModule {}
