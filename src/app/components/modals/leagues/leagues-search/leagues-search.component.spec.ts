import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesSearchComponent } from './leagues-search.component';

describe('LeaguesSearchComponent', () => {
  let component: LeaguesSearchComponent;
  let fixture: ComponentFixture<LeaguesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
