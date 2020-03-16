

const NextConstructor = (max_index=3, _next=-1) => () => _next = (_next + 1) % max_index

// test

const getNextDefault = NextConstructor()
console.assert(0 === getNextDefault())
console.assert(1 === getNextDefault())
console.assert(2 === getNextDefault())
console.assert(0 === getNextDefault())
console.assert(1 === getNextDefault())
console.assert(2 === getNextDefault())

