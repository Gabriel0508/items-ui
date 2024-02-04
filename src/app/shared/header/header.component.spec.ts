import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize collapsed to true', () => {
    expect(component.collapsed).toBe(true);
  });

  it('should toggle collapsed value when onCollapsedNav is called', () => {
    const initialCollapsedValue = component.collapsed;

    // Call the method
    component.onCollapsedNav();

    // Expect the value to be toggled
    expect(component.collapsed).toBe(!initialCollapsedValue);
  });

  it('should collapse navbar on window resize', () => {
    // Initially, the collapsed value is true
    expect(component.collapsed).toBe(true);

    // Simulate a window resize
    window.dispatchEvent(new Event('resize'));

    // Expect the collapsed value to be true after window resize
    expect(component.collapsed).toBe(true);
  });
});
