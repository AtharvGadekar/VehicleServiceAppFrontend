import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAppointmentsComponent } from './shop-appointments.component';

describe('ShopAppointmentsComponent', () => {
  let component: ShopAppointmentsComponent;
  let fixture: ComponentFixture<ShopAppointmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopAppointmentsComponent]
    });
    fixture = TestBed.createComponent(ShopAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
