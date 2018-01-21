import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSearchTeamsComponent } from './panel-search-teams.component';

describe('PanelSearchTeamsComponent', () => {
  let component: PanelSearchTeamsComponent;
  let fixture: ComponentFixture<PanelSearchTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSearchTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSearchTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
