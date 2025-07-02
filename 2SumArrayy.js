
function twoSum(nums,target){
    const map = {};
    for(i=0;i<nums.length;i++){
        const num = nums[i];
        const complement = target - num;
        if(map.hasOwnProperty(complement)){
            return[map[complement],i]
        }
        map[num] = i;
    }
    return [];
}

// Example input
const numbers = [2, 7, 11, 15];
const targetValue = 9;

// Function call and result output
const result = twoSum(numbers, targetValue);
console.log("Indices found:", result);

