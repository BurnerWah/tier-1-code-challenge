// 1. Start with the number 29 and set that equal to a variable named highScore;
let highScore = 29
console.log(highScore)

// 2. Make a new empty array called myScrabbleTiles.
/**
 * @typedef {Object} ScrabbleTile
 * @property {string} tile
 * @property {number} score
 */

/** @type {ScrabbleTile[]} */
const myScrabbleTiles = []
console.log(myScrabbleTiles)

// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
myScrabbleTiles.push(
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 }
)
console.table(myScrabbleTiles)

// 4. Remove the last tile from myScrabbleTiles and save it in a variable named removedTile.
const removedTile = myScrabbleTiles.pop()
console.log(removedTile)

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
myScrabbleTiles.push({ tile: "F", score: 4 })
console.table(myScrabbleTiles)

// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop to add up and return the sum of all the scores for a given array of scrabble tiles.
/**
 * @param {ScrabbleTile[]} tiles
 * @returns {number}
 */
function calculateScore(tiles) {
  let score = 0
  for (const tile of tiles) {
    score += tile.score
  }
  return score
}
console.log(`Score: ${calculateScore(myScrabbleTiles)} (should be 30)`)

// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".
const myScore = calculateScore(myScrabbleTiles)
console.log(myScore)

// 8. Check whether or not your score is higher than the highScore. If your score is higher, change highScore to the new high score.

// DONE!

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    highScore: typeof highScore !== "undefined" ? highScore : undefined,
    myScrabbleTiles:
      typeof myScrabbleTiles !== "undefined" ? myScrabbleTiles : undefined,
    removedTile: typeof removedTile !== "undefined" ? removedTile : undefined,
    calculateScore:
      typeof calculateScore !== "undefined" ? calculateScore : undefined,
    myScore: typeof myScore !== "undefined" ? myScore : undefined,
  }
} catch (e) {
  // Do nothing
}
