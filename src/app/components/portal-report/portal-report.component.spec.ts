import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalReportComponent } from './portal-report.component';

describe('PortalReportComponent', () => {
  let component: PortalReportComponent;
  let fixture: ComponentFixture<PortalReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
