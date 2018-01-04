import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesCreateComponent } from './leagues-create.component';

describe('LeaguesCreateComponent', () => {
  let component: LeaguesCreateComponent;
  let fixture: ComponentFixture<LeaguesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
