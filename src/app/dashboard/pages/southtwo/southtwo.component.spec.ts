import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthtwoComponent } from './southtwo.component';

describe('SouthtwoComponent', () => {
  let component: SouthtwoComponent;
  let fixture: ComponentFixture<SouthtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
