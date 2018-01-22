import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCreateFixtureComponent } from './panel-create-fixture.component';

describe('PanelCreateFixtureComponent', () => {
  let component: PanelCreateFixtureComponent;
  let fixture: ComponentFixture<PanelCreateFixtureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCreateFixtureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCreateFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
