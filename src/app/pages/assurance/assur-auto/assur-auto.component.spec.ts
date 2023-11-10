import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssurAutoComponent } from './assur-auto.component';

describe('AssurAutoComponent', () => {
  let component: AssurAutoComponent;
  let fixture: ComponentFixture<AssurAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssurAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssurAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
