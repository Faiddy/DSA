// Question # 01 : Maximum and minimum of an array using minimum number of comparisons:
// Statement : Given an array of size N. The task is to find the maximum and the minimum 
// element of the array using the minimum number of comparisons.

// Examples:

// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//               Maximum element is: 9

// Input: arr[] = {22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
//               Maximum element is: 35

function setMini(A){
    let mini = Infinity;
    for(let i=0; i<A.length;i++){
        if(A[i]<mini){
            mini = A[i];
        }
    } 
    return mini;
}

function setMax(A){
    let max = -Infinity;
    for(let i=0; i<A.length; i++){
        if(A[i]>max){
            max=A[i];
        }
    }
    return max;
}

function main(){
    const A = [4,5,2,9,1,4];
    console.log("The Minimum number in array is " + setMini(A));
    console.log("The Maximum number in array is " + setMax(A));
}

main();

//---------------------------------------------------------------------------------------------------------

// Question # 02 : Reverse An Array
// Statement: Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the
//  elements such that the first element becomes the last, the second element becomes second last and so on.

// Examples:

// Input: arr[] = {1, 4, 3, 2, 6, 5}  
// Output: {5, 6, 2, 3, 4, 1}
// Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.

// Input: arr[] = {4, 5, 1, 2} 
// Output: {2, 1, 5, 4}
// Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on.

// let arr = [1,4,3,2,6,5];
// arr.reverse();
// console.log(arr);

function reverseArray(arr){
let start = 0;
let end = arr.length-1;
while(start<end){
    let temp = arr[start];
    arr[start]=arr[end];
    arr[end]=temp;
    start++;
    end--;
}
 return arr;
}
let number = [1,4,3,2,6,5];
console.log(reverseArray(number));

//---------------------------------------------------------------------------------------------------------

// Question # 03 : Maximum SubArray
// Statement : Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

function maxSubArray(nums){
    let currentSum = nums[0];
    let maxSum = nums[0];
    for( let i=0; i<nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum,currentSum);
    }
 return maxSum;
}

let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));

//---------------------------------------------------------------------------------------------------------

// Question # 04 : Arrange array in ascending Order.
// Examples:

// Input: arr[] = {1, 4, 3, 2, 6, 5}  
// Output: {1,2,3,4,5,6}
// function arrangeArray(arr){
//     for(let i = 0; i<arr.length-1;i++){
//         for(let j=0; j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let arr = [6,6,8,0,9,4,5]
// console.log(arrangeArray(arr));

//---------------------------------------------------------------------------------------------------------

// Question # 05 : Arrange array in descending Order.
// Examples:

// Input: arr[] = {1, 4, 3, 2, 6, 5}  
// Output: {1,2,3,4,5,6}
// function arrangeDesArray(array){
//     for(let i = 0; i<arr.length-1;i++){
//         for(let j=0; j<arr.length-1-i;j++){
//             if(arr[j]<arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// let array = [6,6,8,0,9,4,5]
// console.log(arrangeDesArray(array));

//---------------------------------------------------------------------------------------------------------

// Question # 06 : Sort array with the values of numbers and strings
// Examples:

// Input: arr[] = {1,2,'queen','spades','jack',4,3}  
// Output: {1,2,3,4,'queen','spades','jack'}

function sortWithSequence(arr){
    let numbers = []
    let strings = []
    for(let item of arr){
        if(typeof item === 'number'){
            numbers.push(item);
        }else{
            strings.push(item);
        }
    }
    numbers.sort((a,b)=>a-b); //ascending order me sort k liye
    strings.sort();  // string value ko sort krny k liye
    return[...numbers,...strings];
}
let arr = [1,2,'queen','spades','jack',4,3];
console.log(sortWithSequence(arr))
// agr new value push krni ho number or string dono hi or push krty hi onki values jo he wo osi tarha sort ho
// ascending order me or string bi sort ho 
arr.push('jack','queen',2,5);
let result = sortWithSequence(arr);
console.log(result);

//---------------------------------------------------------------------------------------------------------

// Question # 07 : Contain Duplicates
// Given an integer array nums, return true if any value appears at least twice in the array, and 
// return false if every element is distinct.
// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// BY USING JAVASCRIPT

// var containDuplicates = function(nums){
//     let unique = new Set();
//     for(let num of nums){
//         if(unique.has(num)){
//             return true;
//         }
//         unique.add(num)
//     }
//     return false
// }

// console.log(containDuplicates([1,2,3,4]))

// // By Using Manual Method

// var checkingDuplicates = function(arr){
//     for(let i = 0; i< arr.length; i++){
//         for(let j = i + 1 ; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(checkingDuplicates([1,2,3]))

//---------------------------------------------------------------------------------------------------------

// Question # 08 : Remove Duplicates
// We have to remove duplicate values from array
// Example 1:
// Input: nums = [1,2,3,1]
// Output: [1,2,3]

// BY USING JAVASCRIPT

// var removeDuplicates = function(arr){
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1,2,3,4,1,2,3,4]))

// // Manually Removing Duplicates

// var removeDup = function(nums){
//     let result = [];
//     for(let i = 0; i< nums.length; i++){
//         let isDuplicate = false;
//         for(let j = 0; j< result.length; j++){
//             if(nums[i] === result[j]){
//                 isDuplicate = true;
//                 break;
//             }
//         }
//         if(!isDuplicate){
//             result.push(nums[i])
//         }
//     }
//     return result;
// }
// console.log(removeDup([1,2,3,5,6,3]))

// // Manually Method Removing Duplicates using strong 

// var removeDups = function(number){
//     number.sort((a,b)=> a-b);
//     let result = [number[0]];
//     for(let i = 1; i<number.length; i++){
//         if(number[i] !== number[i-1]){
//             result.push(number[i])
//         }
//     }
//     return result;
// }
// console.log(removeDups([4,6,3,1,6,3,5]))

//---------------------------------------------------------------------------------------------------------

// Question # 09 : Two Sum Array
//Given an array of integers nums and an integer target, return indices of the two numbers such that they 
//add up to target.You may assume that each input would have exactly one solution, and you may not use the
// same element twice.You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// By using Manual Method

//function twoSum(num,target){
//     for(let i = 0 ; i<num.length; i++){
//         for(let j= i+1; j<num.length;j++){
//             if(num[i] + num[j] === target ){
//                 return[i,j];
//             }
//         }
//     }
// }
// console.log(twoSum([2,7,11,15],9))

// // By using JS

// function Sum(nums, targets){
//  const map = {};
//  for(let i=0; i<nums.length; i++){
//      let complement  = targets-nums[i];
//      if(map.hasOwnProperty(complement)){
//          return [map[complement],i];
//      }
//      map[nums[i]] = i;
//  }
// }
// console.log(Sum([2,7,11,15],9));

//---------------------------------------------------------------------------------------------------------

// Question # 10 : Move Zeroes
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the
//  non-zero elements. Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

var removeZero = function(num){
    let result = [];
    for(let i = 0; i<num.length; i++){
        if(num[i] !== 0){
            result.push(num[i]);
        }
    }
    while(result.length<num.length){
        result.push(0);
    }
    for(let i = 0; i<num.length; i++){
        num[i] = result[i];
    }
}
let num = [0,1,0,3,12];
removeZero(num);
console.log(num)

//---------------------------------------------------------------------------------------------------------

// Question # 11 : Rotate Array
// Given an array nums and number k, tumhe array ko right side me k steps rotate karna hai.
// nums = [1, 2, 3, 4, 5, 6, 7],  k = 3
// Output → [5, 6, 7, 1, 2, 3, 4]

function RotateArray(numss,k){
 let n = numss.length;
 let result = []
 for(let i=0; i<numss.length; i++){
     result[(i + k) % n] = numss[i];
 }
 for(let i=0; i<n; i++){
     numss[i] = result[i];
 }
}
let numss = [1,2,3,4,5,6,7];
RotateArray(numss,4);
console.log(numss)

//---------------------------------------------------------------------------------------------------------

// Question #12: Find the Second Largest Element in the Array Without Sorting
// Statement:
// You are given an array of integers. Your task is to find the second largest unique element in the array without sorting the array.

// Return null if the array does not have at least two unique elements.

// 🔸Examples:
// Input: [10, 5, 10]
// Output: 5

function secondMaxValue(a){
    if(a.length<2) return null;
    let max1 = -Infinity;
    let max2 = -Infinity;
    for(let i = 0; i<a.length; i++){
        let num = a[i];
        if(num>max1){
            max2 = max1;
            max1 = num;
        }else if(num < max1 && num > max2){
            max2 = num;
        }
    }
        return (max2 === -Infinity) ? null : max2;
}
console.log(secondMaxValue([4,4,4]));
console.log(secondMaxValue([12, 35, 1, 10, 34]));
console.log(secondMaxValue([1, 2, 3, 4]));

//---------------------------------------------------------------------------------------------------------

// 🔷 Question #13: Longest Consecutive Sequence
// Problem Statement:
// Given an unsorted array of integers nums, return the length of the longest sequence of consecutive numbers.
// You must write an algorithm that runs in O(n) time.
// 🔸Examples:
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: The longest consecutive sequence is [1, 2, 3, 4].

var LongestConsecutive = function(num){
  let set = new Set(num);
  let streak = 0;
  for(let num of set){
      if(set.has(num-1)) continue;
      let curStreak = 1;
      while(set.has(num+1)){
          curStreak++;
          num++;
      }
      streak = Math.max(streak,curStreak);
  }   
  return streak;
}
console.log(LongestConsecutive([100,4,200,1,3,2]))