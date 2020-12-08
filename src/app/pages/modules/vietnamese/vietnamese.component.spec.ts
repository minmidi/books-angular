import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VietnameseComponent } from './vietnamese.component';

describe('VietnameseComponent', () => {
  let component: VietnameseComponent;
  let fixture: ComponentFixture<VietnameseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VietnameseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VietnameseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
