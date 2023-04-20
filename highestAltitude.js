var largestAltitude = function(gain) {
  let al = 0, highestPoint = 0
  for (let i = 0; i < gain.length; i++) {
      al += gain[i]
      highestPoint = Math.max(highestPoint, al)
  }
  return highestPoint
};