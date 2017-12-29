import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteLoginFormComponent } from './website-login-form.component';

describe('WebsiteLoginFormComponent', () => {
  let component: WebsiteLoginFormComponent;
  let fixture: ComponentFixture<WebsiteLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
