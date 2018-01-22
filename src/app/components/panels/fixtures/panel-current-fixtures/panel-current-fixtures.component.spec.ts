import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCurrentFixturesComponent } from './panel-current-fixtures.component';

describe('PanelCurrentFixturesComponent', () => {
  let component: PanelCurrentFixturesComponent;
  let fixture: ComponentFixture<PanelCurrentFixturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCurrentFixturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCurrentFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
