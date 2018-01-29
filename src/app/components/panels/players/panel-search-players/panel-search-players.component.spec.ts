import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSearchPlayersComponent } from './panel-search-players.component';

describe('PanelSearchPlayersComponent', () => {
  let component: PanelSearchPlayersComponent;
  let fixture: ComponentFixture<PanelSearchPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSearchPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSearchPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
