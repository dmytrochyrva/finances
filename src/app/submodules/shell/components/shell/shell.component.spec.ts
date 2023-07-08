// Libraries Imports
import { ComponentFixture, TestBed } from '@angular/core/testing';

// Local Imports
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
	let component: ShellComponent;
	let fixture: ComponentFixture<ShellComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ShellComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(ShellComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
