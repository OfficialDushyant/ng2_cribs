import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribsCardComponent } from './cribs-card.component';

describe('CribsCardComponent', () => {
  let component: CribsCardComponent;
  let fixture: ComponentFixture<CribsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
