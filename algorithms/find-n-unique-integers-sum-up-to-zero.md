## Question

[Go to leetcode](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero)

Given an integer n, return any array containing n unique integers such that they add up to 0.

Example1:

```
Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
```

Example2:

```
Input: n = 1
Output: [0]
```

Constraints:
- 1 <= n <= 1000

## Answer

```js
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let arr = [];
  
  for(let i = 1; i <= n; i++){  
    if(i !== n && arr.length < n-1){
      arr.push(i);
      arr.push(i * -1);  
    }else if(arr.length === n-1){
      arr.push(0);
    }
  }
  
  return arr;
};
```