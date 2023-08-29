import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApporteurComponent } from './apporteur.component';

describe('ApporteurComponent', () => {
  let component: ApporteurComponent;
  let fixture: ComponentFixture<ApporteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApporteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApporteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
