/*
The frequency of an element is the number of times it occurs in an array.

You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.

 

Example 1:

Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.
Example 2:

Input: nums = [1,4,8,13], k = 5
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.
*/

class Solution {
public:
    int maxFrequency(vector<int>& nums, int k) {
        int maxFrequency = 0; 
        long currentSum = 0; 

        std::sort(nums.begin(), nums.end()); 

        for (int left = 0, right = 0; right < nums.size(); ++right) {
            currentSum += nums[right]; 

           
            while (currentSum + k < static_cast<long>(nums[right]) * (right - left + 1)) {
                currentSum -= nums[left]; 
                left++; 
            }

           
            maxFrequency = std::max(maxFrequency, right - left + 1);
        }

        return maxFrequency;
    }
};