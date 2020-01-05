## Question

[Go to Leetcode]('https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side')

Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:
```
Input: arr = [17,18,5,4,6,1]
Output: [18,6,6,6,1,-1]
```

Constraints:
- 1 <= arr.length <= 10^4
- 1 <= arr[i] <= 10^5

## Answer

```js
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let newArr = [];
  
    const reduceArr = (values) => {
      return values.reduce((acc,value) => {
        if(acc < value){
          return acc = value;
        }else{
          return acc;
        }
      },values[0]);
    }
    
    arr.map((value,index) => {
      const sliceArr = arr.slice(index+1);
      if(sliceArr.length){
        const calcValue = reduceArr(sliceArr);  
        if(calcValue) newArr.push(calcValue);
      }else{
        newArr.push(-1);  
      }    
    });
  
    return newArr;
};
```