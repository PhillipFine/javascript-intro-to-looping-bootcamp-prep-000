function forLoop(array1) {
  for (let i = 0; i<25; i++) {
    if (i===1) {
      array1.push("I am 1 strange loop.")
    } else {
      array1.push(`I am ${i} strange loops.`)
  }
}
return array1}

function whileLoop(n) {
  while (n>=0) {
     console.log(n); n--
  }
return 'done'
}
