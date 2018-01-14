import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoFormComponent } from './todo-form.component';

describe('TodoFormComponent', () => {
  let component: TodoFormComponent;
  let fixture: ComponentFixture<TodoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        FormBuilder
      ]
      }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(TodoFormComponent);
        component = fixture.componentInstance;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have two controls', () => {
    expect(component.userForm.contains('name')).toBe(true);
    expect(component.userForm.contains('email')).toBe(true);
  });

  it('should make the name control required', () => {
    let control = component.userForm.get('name');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
});
