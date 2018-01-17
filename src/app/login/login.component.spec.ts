import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {AuthService} from "../services/auth.service";

//can also mock classes and extend classes for easier debugging

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: AuthService;
  let spy: any;

  beforeEach(() => {
    service = new AuthService();
    component = new LoginComponent(service);
  });
  afterEach(() => { 
    localStorage.removeItem('token');
    service = null;
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('canLogin returns false when the user is not authenticated', () => {
    expect(component.needsLogin()).toBeTruthy();
  });

  it('canLogin returns false when the user is not authenticated', () => {
    localStorage.setItem('token', '12345'); 
    expect(component.needsLogin()).toBeFalsy();
  });

  it('spy: canLogin returns false when the user is not authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(false); 
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled(); 
  });

  it('spy: canLogin returns false when the user is not authenticated', () => {
    spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  });
});