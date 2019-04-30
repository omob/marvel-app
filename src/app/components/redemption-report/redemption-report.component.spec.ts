import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedemptionReportComponent } from './redemption-report.component';

describe('RedemptionReportComponent', () => {
  let component: RedemptionReportComponent;
  let fixture: ComponentFixture<RedemptionReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedemptionReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedemptionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
