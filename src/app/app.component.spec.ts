import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormBuilder } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

xdescribe('AppComponent', () => {
  let fixture;
  let app;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        NavComponent
      ],
      declarations: [
        AppComponent,
        TodoFormComponent
      ],
      providers: [FormBuilder],
      schemas: [ NO_ERRORS_SCHEMA ] // ignore elements it does not recognize
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should have a router outlet', () => {
    let de = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(de).not.toBeNull();
  });
});
