// YOUR CODE

function golfScore(par, strokes) {
  
  if (strokes == 0) {
      return;
  } else if (strokes == 1) {
      return "Hole-in-one!";
  } else if (strokes <= par - 2) {
      return "Eagle";
  } else if (strokes == par - 1) {
      return "Birdie";
  } else if (strokes == par) {
      return "Par";
  } else if (strokes == par + 1) {
      return "Bogey";
  } else if (strokes == par + 2) {
      return "Double Bogey";
  } else {
      return "Go Home!";
  }
}

// DO NOT EDIT BELOW

try {
  module.exports = golfScore;
} catch (err) {
  console.log('golfScore loaded');
}