function steamrollArray(arr) {
    const newArr = [].concat(...arr);
    return newArr.some(Array.isArray) ? steamrollArray(newArr) : newArr;
  }
  
  
  steamrollArray([1, [2], [3, [[4]]]]);

/*Steamroller
Flatten a nested array. You must account for varying levels of nesting.

*/