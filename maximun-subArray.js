// Question # 03 : Maximum SubArray
// Statement : Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

function SubArray(num){
    let currentSum = num[0];
    let maxSum = num[0];
    for(let i=0; i<num.length; i++){
        currentSum = Math.max(num[i], currentSum + num[i]);
        maxSum = Math.max(maxSum,currentSum);
    }
    return maxSum;
}
let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(SubArray(nums));