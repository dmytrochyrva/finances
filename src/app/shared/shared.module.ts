// Libraries Imports
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';

@NgModule({
	declarations: [SvgIconComponent],
	imports: [CommonModule, ModalModule.forRoot(), BsDropdownModule],
	exports: [SvgIconComponent, BsDropdownModule],
})
export class SharedModule {}
