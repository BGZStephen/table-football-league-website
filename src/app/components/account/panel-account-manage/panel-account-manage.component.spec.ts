import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAccountManageComponent } from './panel-account-manage.component';

describe('PanelAccountManageComponent', () => {
  let component: PanelAccountManageComponent;
  let fixture: ComponentFixture<PanelAccountManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAccountManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAccountManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
