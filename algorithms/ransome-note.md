## Question

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

```
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

## Answer

```js
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let newNote = ("" + ransomNote).split('')
    let newMagazine = ("" + magazine).split('')
    let flag = false;
    
    if(newMagazine.length){
        if(!newNote.length){
            flag = true;
            return flag;
        }
        newMagazine.forEach((v,i) =>{
            const indexNote = newNote.indexOf(v);
            if(indexNote !== -1){         
                newNote.splice(indexNote, 1);
            }
        });
    }else{
        if(!newNote.length) flag = true;
    }
    
    if(newNote.length) flag = false;
    else flag = true;
    
    return flag;
};
```