import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNoFixturesComponent } from './panel-no-fixtures.component';

describe('PanelNoFixturesComponent', () => {
  let component: PanelNoFixturesComponent;
  let fixture: ComponentFixture<PanelNoFixturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelNoFixturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNoFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
