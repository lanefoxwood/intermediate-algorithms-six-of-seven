function sumAll(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    let allNums = [];
    for(let i = min; i <= max; i++){
        allNums.push(i)
    }
    return allNums
        .reduce((previousVal, currentVal) => previousVal + currentVal, 0)
  }
sumAll([1, 4]);

/* Sum All Numbers in a Range


0. I would sort to get the arr in ascending order and return sorted arr,
1. at each index, i would evaluate if current < next is true then concat current+1 to the array to return each val in range
2. reduce to aggregate all values and return the aggregator.
3. could solve recursively as the template may suggest. 


We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

example, range 4, 1 is 4+1, 3+2,  = 10 or range 10, 5 is 10+5, 9+6, 8+7. or range 12, 3 is 12+3, 11+4, 10+5, 9+6, 8+7
lat example is range 1,14 so 1+14, 2+13, 3+12, 4+11, 5+10, 6+9, 7+8.
another, 1,5. is 1+5, 2+4, 3

seems like there is a pattern here... every pair adds to max + min or min+max AND
whatever max-min / 2 is, you round up to the nearest whole number which tells you how many times to add(or multiply)

take the range 1,4. max+min = 5. now, (max-min)/2 = (3/2) = 1.5. round that up to the nearest whole number, 2. 
we can say the sum of all numbers in the range is (max+min)* ((max-min)/2) - rounded up to the nearest whole number.

but we have edge cases here, such as the range 1,5. as 1+5, 2+4, 3. we can see that not every sum is equal to 6, because the 3 is left without a partner. 
*/