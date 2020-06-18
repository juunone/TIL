# 1252. Cells with Odd Values in a Matrix

[Go to leetcode](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/)

Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.

Return the number of cells with odd values in the matrix after applying the increment to all indices.


Example 1:

![img1](https://assets.leetcode.com/uploads/2019/10/30/e1.png)
```
Input: n = 2, m = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix will be [[1,3,1],[1,3,1]] which contains 6 odd numbers.
```

Example 2:

![img2](https://assets.leetcode.com/uploads/2019/10/30/e2.png)
```
Input: n = 2, m = 2, indices = [[1,1],[0,0]]
Output: 0
Explanation: Final matrix = [[2,2],[2,2]]. There is no odd number in the final matrix.
```
 
Note:

- 1 <= n <= 50
- 1 <= m <= 50
- 1 <= indices.length <= 100
- 0 <= indices[i][0] < n
- 0 <= indices[i][1] < m

## Answer

```js
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(n, m, indices) {
  let col = new Array(m).fill(0);
  let matrix = [];

  for(let i = 0; i < n; i++){
    matrix.push(col);
  }
  
  const calc = (where,type) => {
    if(type === "row"){
      matrix[where] = matrix[where].map((val)=>{
        return val+1;
      })
    }else{
      matrix = matrix.map((location,idx)=>{
        return location.map((val,j)=>{
          if(where === j){
            return val+1;
          } else{
            return val;
          }
        })
      })
    }
  }
  
  indices.forEach((value)=>{
    calc(value[0], 'row');
    calc(value[1], 'col');
  });
  
  let cnt = 0;
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
      if(matrix[i][j] % 2 !== 0) cnt++;
    }
  }
  return cnt;
};
```

## Answer2

```js
var oddCells = function (n, m, indices) {
  const row = new Array(n).fill(0)
  const col = new Array(m).fill(0)

  for (let i = 0; i < indices.length; i++) {
    row[indices[i][0]]++;
    col[indices[i][1]]++;
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((row[i] + col[j]) % 2 !== 0) {
        count++;
      }
    }
  }

  return count;
};
```