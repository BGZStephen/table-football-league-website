import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteHomeFeaturesComponent } from './website-home-features.component';

describe('WebsiteHomeFeaturesComponent', () => {
  let component: WebsiteHomeFeaturesComponent;
  let fixture: ComponentFixture<WebsiteHomeFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteHomeFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteHomeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
