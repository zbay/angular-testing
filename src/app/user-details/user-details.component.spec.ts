import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { UserDetailsComponent } from './user-details.component';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

class RouterStub{
  navigate(params){

  }
}

class ActivatedRouteStub{
  private subject = new Subject();

  push(value){
    this.subject.next(value);
  }

  get params(){
    return this.subject.asObservable();
  }
  //params: Observable<any> = Observable.empty();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect the user to the users page after saving', () => {
    let router = TestBed.get(Router); 
    let spy = spyOn(router, 'navigate');
    
    component.save();

    expect(spy).toHaveBeenCalledWith(['todos']);
  });

  it('should redirect the user to the not found page when an invalid user id is passed', () => {
    let router = TestBed.get(Router); 
    let spy = spyOn(router, 'navigate');
    
    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({id: 0});

    expect(spy).toHaveBeenCalledWith(['not-found']);
  });
});