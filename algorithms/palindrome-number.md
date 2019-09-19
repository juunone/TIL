## Question

[Go to leetcode](https://leetcode.com/problems/palindrome-number/)

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:
```
Input: 121
Output: true
```

Example 2:
```
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

Example 3:
```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:
```

## Answer

```js
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(Number(x) === 'NaN' || !isNaN(x) !== true || Math.sign(x) === -1) return false;
  else if(x.length === 1) return true;
  
  let arr = (""+x).split("");
  let compareArr = [];
  for(let i = arr.length; i--;){
    compareArr.push(arr[i]);
  }
  
  let flag = true;
  for(let i = 0; i < compareArr.length; i++){
    if(compareArr[i] !== arr[i]){
     flag = false;
     break; 
    }
  }
  
  return flag;
};
```