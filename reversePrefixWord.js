var reversePrefix = function(word, ch) {
  const wordArr = word.split('')
  let stopIndex = word.indexOf(ch)
  
  let left = 0
  for (let left = 0, right = stopIndex; left < right; left++, right--) {
      [wordArr[left], wordArr[right]] = [wordArr[right], wordArr[left]]
  }
  return wordArr.join('')
};