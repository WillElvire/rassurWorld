import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssurComponent } from './assur.component';

describe('AssurComponent', () => {
  let component: AssurComponent;
  let fixture: ComponentFixture<AssurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
