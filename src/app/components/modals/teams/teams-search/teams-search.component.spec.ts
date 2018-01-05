import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsSearchComponent } from './teams-search.component';

describe('TeamsSearchComponent', () => {
  let component: TeamsSearchComponent;
  let fixture: ComponentFixture<TeamsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
