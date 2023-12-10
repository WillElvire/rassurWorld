import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssurDefaultComponent } from './assur-default.component';

describe('AssurDefaultComponent', () => {
  let component: AssurDefaultComponent;
  let fixture: ComponentFixture<AssurDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssurDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssurDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
