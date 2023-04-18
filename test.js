function replaceText2(string) {
  let arr = string.split("")
  for (let i = 0; i < string.length; i++) {
    for (let j = string.length - 1 ;j < 1; j--) {
      // let count = 0
      // if (arr[i] === arr[j]) {
      //   count = count + 1 
      // }
      // if (count > 1) {
      //   const newArr = arr.map(char => {
      //     if (char === arr[i]) {
      //       return 'y'
      //     }
      //     return char
      //   })
      // }
      console.log(arr[i])
    }
  }
  // return arr
}
// console.log()

replaceText2('abaac')

function iterate(string) {
  const arr = string.split('')
  for (let i = 0; i < arr.length; i++) {
    const checkArr = arr.filter(el => el !== arr[i])
    if (checkArr.length < arr.length - 1) {
      string = string.replaceAll(arr[i], 'y')
    }
  }
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== 'y') {
      string = string.replace(string[i], 'x')
    }
  }
  return string
}




// function replaceText(string) {
//   const seen = new Set()
//   const result = []
//   for (let i = 0; i < string.length; i++) {
//     result.push("")
//   }
//   // result = ["", "", ""....]

//   // If any letter is duplicated, that position will be replaced by "y"
//   // Else, do nothing, in result, it will still be ""
//   for (let i = 0; i < string.length; i++) {
//     if (seen.has(string[i])) {
//       seen.add(string[i])
//       result[i] = "y"
//     } 
//   }
//   // xxxyyyy
//   // abcbbb

//   for (let i = 0; i < string.length; i++) {
//     if (result[i] === "") {
//       result[i] = "x"
//     }
//   }
// }
// console.log(iterate('yxxxx'))


function replaceText(string) {
  
  const arr = string.split('')

  // create a word counter hashmap, count frequecy => O(n)
  const frequency = {}

  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]] ? frequency[arr[i]] += 1 : frequency[arr[i]] = 1
  }

  for (let i = 0; i < arr.length; i++) {
    frequency[arr[i]] > 1 ? arr[i] = 'y' : arr[i] = 'x'
  }

  return arr.join("")
}

console.log(olivia('heLlo world'))