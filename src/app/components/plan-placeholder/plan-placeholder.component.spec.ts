import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanPlaceholderComponent } from './plan-placeholder.component';

describe('PlanPlaceholderComponent', () => {
  let component: PlanPlaceholderComponent;
  let fixture: ComponentFixture<PlanPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
