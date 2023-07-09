// Libraries Imports
import { Observable, map } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-svg-icon',
	templateUrl: './svg-icon.component.html',
	styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
	@Input() src!: string;

	public icon$!: Observable<SafeHtml>;

	constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

	public ngOnInit(): void {
		this.icon$ = this.http
			.get(this.src, { responseType: 'text' })
			.pipe(map((icon) => this.sanitizer.bypassSecurityTrustHtml(icon)));
	}
}
