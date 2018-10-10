# Map and Reduce

## Map

`Map` is a function on the Array object’s prototype which takes a single input parameter — a callback function.

What `map` does is that it will go through every element on the array it is called on and it will execute that function.
The callback is passed the element we are currently mapping over so we can make any transformations or calculations that we need. After we go through each element, map will return a new array containing the result of the mapping.

```javascript
    const numbers = [1, 4, 6, 9]  // [1, 4, 6, 9]
    const byTwo = numbers.map(x => x * 2)  // [2, 8, 12, 18]
```

The `callback` parameter of map is passed 3 main parameters:

- `CurrentValue`: The current element being processed in the array.
- `index` (Optional): The index of the current element being processed in the array.
- `array` (Optional): The array `map` was called upon.

```javascript
    ['a', 'b', 'c'].map((currentValue, index, originalArray) => {
      if (index === originalArray.length -1) return currentValue
      return currentValue + originalArray[index+1]
    }) // ['ab', 'bc', 'c']
```

The return value of `map` is NOT the original array modified, but a new array of equal length of the original with the transformed elements inside.

`map` is generally preferred to other iteration methods as it goes more neatly with the functional programming philosophy in JavaScript, though it is not always the case.

## Reduce

`reduce ` is a function on the Array object’s prototype which takes a single input parameter — a callback function,
just like `map`, but unlike `map` it will not return a list of equal size as the original, it will return a single value accumulated throughout the iterations.

The easiest example to understand reduce is by calculating the total of an array of numbers.

```javascript
const numbers = [1, 4, 5, 7, 9]
numbers.reduce(function(accumulator, current) {
  return accumulator + current
}, 0) // 26
```

As you can see, the parameters of the `callback` function are also different from `map` as is that there's also a second parameter to the function call, which is the `initialValue`.
This initial value is what is originally passed in as the `accumulator` parameter to the callback. 
If no initial value is supplied, the first element in the array will be used.

The `callback` parameter of map is passed 4 main parameters:

- `Accumulator`: The accumulator accumulates the callback's return values value. It is the return value of the last invocation of the callback, or the `initialValue` if supplied.
- `currentValue`: The current element being processed in the array.
- `index` (Optional): The index of the current element being processed in the array.
- `array` (Optional): The array `map` was called upon.

One interesting thing about reduce is that the returns value shape has no relation to the array or the item that it contains.
Reduce can return another `array`, a `string`, `number` or even an `object`.

```javascript
const items = ['banana', 'orange', 'banana', 'apple', 'grapes', 'orange', 'apple', 'banana', 'peach', 'apple']
items.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr]++
  } else {
    acc[curr] = 1
  }
  
  return acc
}, {}) // { banana: 3, orange: 2, apple: 3, grapes: 1, peach: 1 }
```


References:
- https://hackernoon.com/map-filter-and-reduce-67d408e06107
