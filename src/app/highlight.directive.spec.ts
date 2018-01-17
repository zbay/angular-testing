import { HighlightDirective } from './highlight.directive';
import { Component } from '@angular/core';
import { ComponentFixture, async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <p highlight="cyan">First</p>
    <p highlight>Second</p>
  `
})
class DirectiveHostComponent { 
}

describe('HighlightDirective', () => {
  let fixture: ComponentFixture<DirectiveHostComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveHostComponent, HighlightDirective ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHostComponent);
    fixture.detectChanges(); 
  });

  xit('should highlight the first element with cyan', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0];  

    expect(de.nativeElement.style.backgroundColor).toBe('cyan');
  });

  xit('should highlight the second element with default color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1];  
    let directive = de.injector.get(HighlightDirective);
    
    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor);
  });
});
