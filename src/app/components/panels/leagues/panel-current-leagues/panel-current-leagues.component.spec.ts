import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCurrentLeaguesComponent } from './panel-current-leagues.component';

describe('PanelCurrentLeaguesComponent', () => {
  let component: PanelCurrentLeaguesComponent;
  let fixture: ComponentFixture<PanelCurrentLeaguesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCurrentLeaguesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCurrentLeaguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
