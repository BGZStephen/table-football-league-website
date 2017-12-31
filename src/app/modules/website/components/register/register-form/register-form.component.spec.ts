import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteRegisterFormComponent } from './website-register-form.component';

describe('WebsiteRegisterFormComponent', () => {
  let component: WebsiteRegisterFormComponent;
  let fixture: ComponentFixture<WebsiteRegisterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteRegisterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
