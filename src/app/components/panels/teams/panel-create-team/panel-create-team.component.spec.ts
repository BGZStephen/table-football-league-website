import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCreateTeamComponent } from './panel-create-team.component';

describe('PanelCreateTeamComponent', () => {
  let component: PanelCreateTeamComponent;
  let fixture: ComponentFixture<PanelCreateTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCreateTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCreateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
