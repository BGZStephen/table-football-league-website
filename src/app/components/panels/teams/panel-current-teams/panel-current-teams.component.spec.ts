import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCurrentTeamsComponent } from './panel-current-teams.component';

describe('PanelCurrentTeamsComponent', () => {
  let component: PanelCurrentTeamsComponent;
  let fixture: ComponentFixture<PanelCurrentTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCurrentTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCurrentTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
