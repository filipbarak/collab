import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaPlaceholderComponent } from './idea-placeholder.component';

describe('IdeaPlaceholderComponent', () => {
  let component: IdeaPlaceholderComponent;
  let fixture: ComponentFixture<IdeaPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeaPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
