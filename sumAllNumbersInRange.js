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

//adding comments which demonstrate my logic process:
// this program should accept an array as an argument. It should return a single number, which is the sum of all of the two numbers give, plus all the numbers inbetween. 

/* 
so i know i need a function:
*/

function sumAll(arr){
    /* 
   so inside of this function I need to do the following:
   TODO: 1. copmute the range of numbers given see below...
   TODO: 2. initialize an empty range array arrayRange = [];
   TODO: 3. initialize a counter variable, call it TOTAL and set it to zero.
   TODO: 4. we need to loop over each index of the arrayRange and do math: where you take the total and add the value of the index. 
       for(index of array){
           return Total = total + index
       }
   TODO: 5. return the value of TOTAL as a result of running this function.
   */
   let arrayRange = [];
   let total = 0;
       if(arr[0] < arr[1]){
           for(let i=arr[0]; i <= arr[1]; i ++){
               arrayRange.push(i);
           }
       } else {
           for(let i = arr[1]; i <= arr[0]; i ++){
               arrayRange.push(i);
           }
       }
       for(let index of arrayRange){
           total = total + index
       }
       return total;
   }
  

// well, this feels dumb, but I need to actually compute the range first before I loop over and add anything. let's take the easy case arr = [1,4].

//TODO: 0. i need an empty array called arrayRange for the computed range to be stored in.
//TODO: 1. IF check. arr[0] < arr[1] ? true? GOOD! now we need to compute the incrementing range:
//TODO: 2. we need a loop here. I think for(let i = arr[0]; i = arr[1]; i++){}
   //inside this loop I need to do the following:
   //TODO: take the value of i and push it into a new array called arrayRange.
   //TODO: keep doing this until I get a full list of numbers. 

// so, first iteration, i = 1, so arrayRange.push(i) gives us 1. arrayRange look like: [1]
// second iteration, i = 1+1 = 2 so arrayRange.push(i) gives us 2. arrayRange looks like [1,2]
// third iteration, i = 2+1 = 3 so arrayRange.push(i) gives us 3 into... [1,2,3]
//f fourth iteration i = 3 +1 = 4 so now i === arr[1] and the .push(i) gives us [1,2,3,4]. YAY!

// now what about the other case arr [4,1], where arr[0] > arr[1]...AKA the original IF check is false.
// well, the loop can be the same from arr[0] to arr[1] but we just swap the start and end values. the range computation remains the same, where all we do is push the value of i into the arrayRange. 

/* 
   the loop is a little silly, but it may look something like this: for the case arr = [1,4] :

   let arrayRange = [];
    if(arr[0] < arr[1]){
       for(let i=arr[0]; i = arr[1]; i ++){
           arrayRange.push(i);
       }
   } else {
       for(let i = arr[1]; i <= arr[0]; i ++){
           arrayRange.push(i);
       }
   }

*/