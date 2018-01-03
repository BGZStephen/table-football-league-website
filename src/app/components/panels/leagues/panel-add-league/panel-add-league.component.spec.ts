import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAddLeagueComponent } from './panel-add-league.component';

describe('PanelAddLeagueComponent', () => {
  let component: PanelAddLeagueComponent;
  let fixture: ComponentFixture<PanelAddLeagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAddLeagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAddLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
