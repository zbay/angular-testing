import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should successfully upvote', () => {
    let totalVotes = null;
    component.votesEmitter.subscribe(tv => {
      totalVotes = tv;
    });
    component.upVote();
    expect(totalVotes).toBe(1);
  });
  it('should successfully downvote', () => {
    let totalVotes = null;
    component.votesEmitter.subscribe(tv => {
      totalVotes = tv;
    });
    component.downVote();
    expect(totalVotes).toBe(-1);
  });
});
