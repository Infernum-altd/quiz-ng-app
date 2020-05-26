import { TestBed } from '@angular/core/testing';

import { QuizCheckServiceService } from './quiz-check-service.service';

describe('QuizCheckServiceService', () => {
  let service: QuizCheckServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizCheckServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
