import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteContactFormComponent } from './website-contact-form.component';

describe('WebsiteContactFormComponent', () => {
  let component: WebsiteContactFormComponent;
  let fixture: ComponentFixture<WebsiteContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
