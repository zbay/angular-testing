import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  totalVotes: number = 0;
  @Output() votesEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upVote(){
    this.totalVotes++;
    this.emitVotes();
  }
  downVote(){
    this.totalVotes--;
    this.emitVotes();
  }

  emitVotes(){
    this.votesEmitter.emit(this.totalVotes);
  }

}
