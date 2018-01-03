import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelNoLeaguesComponent } from './panel-no-leagues.component';

describe('PanelNoLeaguesComponent', () => {
  let component: PanelNoLeaguesComponent;
  let fixture: ComponentFixture<PanelNoLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelNoLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelNoLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
