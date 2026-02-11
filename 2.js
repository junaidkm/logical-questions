// You are given an integer array nums.

// A subarray is called balanced if the number of distinct even numbers in the subarray is equal to the number of distinct odd numbers.

// Return the length of the longest balanced subarray.

 

// Example 1:

// Input: nums = [2,5,4,3]

// Output: 4

// Explanation:

// The longest balanced subarray is [2, 5, 4, 3].
// It has 2 distinct even numbers [2, 4] and 2 distinct odd numbers [5, 3]. Thus, the answer is 4.



function longestBalancedSubarray(nums) {
  let maxLength = 0;

  for (let start = 0; start < nums.length; start++) {
    let evenSet = new Set();
    let oddSet = new Set();

    for (let end = start; end < nums.length; end++) {
      if (nums[end] % 2 === 0) {
        evenSet.add(nums[end]);
      } else {
        oddSet.add(nums[end]);
      }

      if (evenSet.size === oddSet.size) {
        maxLength = Math.max(maxLength, end - start + 1);
      }
    }
  }

  return maxLength;
}

console.log(longestBalancedSubarray([2,5,4,3])); // 4
