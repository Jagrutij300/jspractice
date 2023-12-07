import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCyclehooksComponent } from './life-cyclehooks.component';

describe('LifeCyclehooksComponent', () => {
  let component: LifeCyclehooksComponent;
  let fixture: ComponentFixture<LifeCyclehooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifeCyclehooksComponent]
    });
    fixture = TestBed.createComponent(LifeCyclehooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
