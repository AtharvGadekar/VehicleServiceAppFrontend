import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopvehiclesComponent } from './shopvehicles.component';

describe('ShopvehiclesComponent', () => {
  let component: ShopvehiclesComponent;
  let fixture: ComponentFixture<ShopvehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopvehiclesComponent]
    });
    fixture = TestBed.createComponent(ShopvehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
