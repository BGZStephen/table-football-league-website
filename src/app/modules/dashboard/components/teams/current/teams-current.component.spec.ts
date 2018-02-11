import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsCurrentComponent } from './panel-current-teams.component';

describe('TeamsCurrentComponent', () => {
  let component: TeamsCurrentComponent;
  let fixture: ComponentFixture<TeamsCurrentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsCurrentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
