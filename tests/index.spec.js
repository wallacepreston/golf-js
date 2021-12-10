const golfScore = require('../index');

describe('golfScore', () => {
  it('is a function', () => {
    expect(typeof golfScore).toEqual('function');
  });

  it('returns a string', () => {
    let returnedValue = golfScore(1, 2);
    expect(typeof returnedValue).toEqual('string');
  });

  it('returns Birdie for a par 4 and strokes 3', () => {
    expect(golfScore(4, 3)).toEqual('Birdie');
  });

  it('returns correct string for multiple cases', () => {
    let parFour = [undefined, 'Hole-in-one!', 'Eagle', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];
    
    for (let strokes = 1; strokes < parFour.length; ++strokes) {
        expect(golfScore(4, strokes)).toBe(parFour[strokes])
    }
  });

  it('returns correct string for multiple cases', () => {
    let parThree = [undefined, 'Hole-in-one!', 'Birdie', 'Par', 'Bogey', 'Double Bogey', 'Go Home!'];
    
    for (let strokes = 1; strokes < parThree.length; ++strokes) {
        expect(golfScore(3, strokes)).toBe(parThree[strokes])
    }

  });

});
