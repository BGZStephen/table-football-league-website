import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNoTeamsComponent } from './panel-no-teams.component';

describe('PanelNoTeamsComponent', () => {
  let component: PanelNoTeamsComponent;
  let fixture: ComponentFixture<PanelNoTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelNoTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNoTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
