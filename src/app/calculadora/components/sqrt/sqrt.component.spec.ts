import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqrtComponent } from './sqrt.component';

describe('SqrtComponent', () => {
  let component: SqrtComponent;
  let fixture: ComponentFixture<SqrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
