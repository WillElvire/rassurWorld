import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssurIndividuelComponent } from './assur-individuel.component';

describe('AssurIndividuelComponent', () => {
  let component: AssurIndividuelComponent;
  let fixture: ComponentFixture<AssurIndividuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssurIndividuelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssurIndividuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
