# 1502. Can Make Arithmetic Progression From Sequence

[Go to leetcode](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/)

Given an array of numbers arr. A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Return true if the array can be rearranged to form an arithmetic progression, otherwise, return false.

Example 1:

```
Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.
```

Example 2:

```
Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.
```
 
Constraints:

- 2 <= arr.length <= 1000
- -10^6 <= arr[i] <= 10^6

## Answer

```js
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const sorting = (nums) => {
        return nums.sort((a,b)=>{
            return b - a;
        })    
    }
    
    const topDown = sorting([...arr]);
    
    let count = 0;
    let res = topDown.length === 2 ? true : false;
    
    if(topDown.length > 2){
        for(let i = 0; i < topDown.length; i++){
            if(i === 0){
                count = topDown[i] - topDown[i+1]    
            }else if(i < topDown.length -1 && count === topDown[i] - topDown[i+1]){
                res = true;
            }else if(i < topDown.length -1 && count !== topDown[i] - topDown[i+1]){
                res = false;
                break;
            }
        }    
    }
    
    return res;
};
```