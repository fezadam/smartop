import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurgeonTableComponent } from './surgeon-table.component';

describe('SurgeonTableComponent', () => {
  let component: SurgeonTableComponent;
  let fixture: ComponentFixture<SurgeonTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurgeonTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurgeonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
