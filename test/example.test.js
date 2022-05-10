// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = <div id="multnomah"><img id="multnomahPic" src="XXX"/><h3>Multnomah Falls</h3><p>Location: 1 hour from Portland Oregon</p></div>;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFalls(){
        
    };

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
