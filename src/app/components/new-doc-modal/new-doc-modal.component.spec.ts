import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDocModalComponent } from './new-doc-modal.component';

describe('NewDocModalComponent', () => {
  let component: NewDocModalComponent;
  let fixture: ComponentFixture<NewDocModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDocModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDocModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
