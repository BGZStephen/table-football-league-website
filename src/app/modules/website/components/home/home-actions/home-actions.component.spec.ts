import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteHomeActionsComponent } from './website-home-actions.component';

describe('WebsiteHomeActionsComponent', () => {
  let component: WebsiteHomeActionsComponent;
  let fixture: ComponentFixture<WebsiteHomeActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteHomeActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteHomeActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
