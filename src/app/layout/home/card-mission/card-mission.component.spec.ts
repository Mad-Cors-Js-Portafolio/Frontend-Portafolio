import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMissionComponent } from './card-mission.component';

describe('CardMissionComponent', () => {
  let component: CardMissionComponent;
  let fixture: ComponentFixture<CardMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
