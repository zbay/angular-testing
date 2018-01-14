import { VoteComponent } from './vote.component';

// step 1: Arrange
let component: VoteComponent;

beforeEach(function initialize(){
    component = new VoteComponent();
});
/*afterEach(function tearDown(){});
beforeAll(function setupAll(){});
afterAll(function tearDownAll(){});*/

describe('VoteComponent', function voteComponentTesting(){
    it('should increment votes when upvoted', function(){
        // step 2: Act
        component.upVote();

        // step 3: Assert
        expect(component.totalVotes).toBe(1);
    });
    it('should decrement votes when downvoted', function(){
        // step 2: Act
        component.downVote();

        // step 3: Assert
        expect(component.totalVotes).toBe(-1);      
    });
});

/*
// boilerplate
import { VoteComponent } from './vote.component';

describe('VoteComponent', function voteComponentTesting(){
    it('', function(){

    });
    it('', function(){
        
    });
});
*/