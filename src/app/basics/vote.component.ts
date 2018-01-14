export class VoteComponent{
    totalVotes;
    constructor(){
        this.totalVotes = 0;
    }

    upVote(){
        this.totalVotes++;
    }

    downVote(){
        this.totalVotes--;
    }
}