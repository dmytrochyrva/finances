// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Local Imports
import { ApiService } from './services/api.service';

@NgModule({
	declarations: [],
	imports: [CommonModule, HttpClientModule],
	providers: [ApiService],
})
export class CoreModule {}
