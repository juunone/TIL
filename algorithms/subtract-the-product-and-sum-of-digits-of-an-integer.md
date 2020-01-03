## Question

[Go to leetcode]('https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer')

Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Example 1:
```
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
```

Example 2:
```
Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
```

Constraints:
- 1 <= n <= 10^5

## Answer

```js
/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const arr = n.toString().split('');
  let result = {
    multiply:null,
    plus:null,
  };

  const multiplyNumbers = () => {
   arr.forEach((value,index) => {
      if(index !== 0){
        if(result.multiply === null) result.multiply = value * arr[index - 1];
        else result.multiply = result.multiply * value;
      } 

    })
    return result.multiply;
  };
  const plusNumbers = () => {
    arr.forEach((value,index) => {
      if(index !== 0){
        if(result.plus === null) result.plus = parseInt(value) + parseInt(arr[index - 1]);
        else result.plus = result.plus + parseInt(value);
      }
    });
    return result.plus;
  }  
  return  multiplyNumbers() - plusNumbers();
};
```