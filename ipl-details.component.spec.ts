import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IplDetailsComponent } from './ipl-details.component';

describe('IplDetailsComponent', () => {
  let component: IplDetailsComponent;
  let fixture: ComponentFixture<IplDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IplDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IplDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
