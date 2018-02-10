import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagecomposeComponent } from './message-compose.component';

describe('MessagecomposeComponent', () => {
  let component: MessagecomposeComponent;
  let fixture: ComponentFixture<MessagecomposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagecomposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagecomposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
