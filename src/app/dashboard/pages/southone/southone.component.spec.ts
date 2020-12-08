import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthoneComponent } from './southone.component';

describe('SouthoneComponent', () => {
  let component: SouthoneComponent;
  let fixture: ComponentFixture<SouthoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SouthoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
