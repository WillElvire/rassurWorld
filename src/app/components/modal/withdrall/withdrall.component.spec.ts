import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrallComponent } from './withdrall.component';

describe('WithdrallComponent', () => {
  let component: WithdrallComponent;
  let fixture: ComponentFixture<WithdrallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithdrallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithdrallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
