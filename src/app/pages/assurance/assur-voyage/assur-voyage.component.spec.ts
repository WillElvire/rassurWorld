import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssurVoyageComponent } from './assur-voyage.component';

describe('AssurVoyageComponent', () => {
  let component: AssurVoyageComponent;
  let fixture: ComponentFixture<AssurVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssurVoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssurVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
