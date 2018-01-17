import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  xit("should have a link to the todos page", () => {
    let debugElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    let index = debugElements.findIndex(de => de.properties['href'] === '/todos');
    expect(index).toBeGreaterThan(-1);
  });
});
