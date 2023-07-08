// Libraries Imports
import { TestBed } from '@angular/core/testing';

// Local Imports
import { ApiService } from './api.service';

describe('ApiService', () => {
	let service: ApiService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ApiService],
		});
		service = TestBed.inject(ApiService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
