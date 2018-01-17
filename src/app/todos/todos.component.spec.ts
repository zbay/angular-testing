import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { HttpModule } from '@angular/http';

import { TodosComponent } from './todos.component';
import { TodoService } from '../services/todo.service';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let service: TodoService;

  let todos = [1, 2, 3];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      declarations: [ TodosComponent ],
      providers: [ TodoService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TodoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set todos property with the items returned', () => {
    let todos = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([todos]);
    });
    component.ngOnInit();
    expect(component.todos).toBe(todos);
  });

  it('adds new todo from the service to todos', () => {
    let todo = {id: 1}
    let spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));
    component.add();
    expect(spy).toHaveBeenCalled();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('updates message upon an add error', () => {
    let error = "Error";
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should call the server to delete a todo item if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should NOT call the server to delete a todo item if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(1);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should load todos from the server', () => {
    //fixture.debugElement.injector.get(TodoService); // From component directly
    spyOn(service, 'getTodos').and.returnValue(Observable.from([todos]));
    fixture.detectChanges();
    component.ngOnInit();

    expect(component.todos).toBe(todos);
  });

  it('should load todos promise from the server', fakeAsync(() => { // handle asynchrony
    spyOn(service, 'getTodosPromise').and.returnValue(Promise.resolve([1,2,3]));
    fixture.detectChanges();
    component.ngOnInit();

    tick(); // pass time to let asynchronous ops catch up
    expect(component.todos).toBe(todos);

    /*fixture.whenStable().then(() => { // use this aproach with the real async()
      expect(component.todos).toBe(todos);
    });(/)
  }));
});
