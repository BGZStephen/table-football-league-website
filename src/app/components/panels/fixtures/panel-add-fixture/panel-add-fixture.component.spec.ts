import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAddFixtureComponent } from './panel-add-fixture.component';

describe('PanelAddFixtureComponent', () => {
  let component: PanelAddFixtureComponent;
  let fixture: ComponentFixture<PanelAddFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAddFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAddFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
