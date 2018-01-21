import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSearchLeaguesComponent } from './panel-search-leagues.component';

describe('PanelSearchLeaguesComponent', () => {
  let component: PanelSearchLeaguesComponent;
  let fixture: ComponentFixture<PanelSearchLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelSearchLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSearchLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
