import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTimekeepingComponent } from './list-timekeeping.component';

describe('ListTimekeepingComponent', () => {
  let component: ListTimekeepingComponent;
  let fixture: ComponentFixture<ListTimekeepingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTimekeepingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTimekeepingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
