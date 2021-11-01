import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TerminadoComponent } from './terminado.component';

describe('TerminadoComponent', () => {
  let component: TerminadoComponent;
  let fixture: ComponentFixture<TerminadoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
