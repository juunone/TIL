## Question

[Go to Leetcode]('https://leetcode.com/problems/unique-number-of-occurrences/')

Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

Example 1:
```
Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
```

Example 2:
```
Input: arr = [1,2]
Output: false
```

Example 3:
```
Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
```

Constraints:
> 1 <= arr.length <= 1000
> -1000 <= arr[i] <= 1000

## Answer

```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const sortArr = arr.sort((a,b) => a - b);
    const reduceObj = sortArr.reduce((acc,value) => {
        if(acc[value]) acc[value] = acc[value]+1;
        else acc[value] = 1;         
        return acc;
    },{});    
    
    const objToArray = Object.keys(reduceObj);
    const extractCount = objToArray.map(v =>{
        return reduceObj[v];
    })    
    
    const delOverlap = Array.from(new Set(extractCount));    
    
    return delOverlap.length === Object.keys(reduceObj).length
};
```