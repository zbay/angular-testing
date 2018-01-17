import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {
  @Input() othersVote = 0;
  @Input() myVote = 0;

  @Output() voteEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {}

  upVote(){
    if(this.myVote === 1){
      return;
    }
    this.myVote++;
    this.voteEmitter.emit({myVote: this.myVote});
  }

  downVote() {
    if (this.myVote == -1)
        return;
        
    this.myVote--;
    this.voteEmitter.emit({ myVote: this.myVote });
  }

  get totalVotes() {
    return this.othersVote + this.myVote;
  } 

}
