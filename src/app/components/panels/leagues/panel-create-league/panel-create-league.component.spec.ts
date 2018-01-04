import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCreateLeagueComponent } from './panel-create-league.component';

describe('PanelCreateLeagueComponent', () => {
  let component: PanelCreateLeagueComponent;
  let fixture: ComponentFixture<PanelCreateLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCreateLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCreateLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
