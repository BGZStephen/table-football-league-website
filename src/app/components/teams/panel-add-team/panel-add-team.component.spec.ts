import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAddTeamComponent } from './panel-add-team.component';

describe('PanelAddTeamComponent', () => {
  let component: PanelAddTeamComponent;
  let fixture: ComponentFixture<PanelAddTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAddTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAddTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
