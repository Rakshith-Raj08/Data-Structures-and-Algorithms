#include <cmath>


class Solution {
public:
    int smallestDivisor(vector<int>& nums, int threshold) {
       int l = 1, h = *std::max_element(nums.begin(), nums.end()), mid, total;
        int n = nums.size();
        
        while (l <= h) {
            mid = (l + h) / 2;
            total = 0;
            
            for (int i = 0; i < n; ++i) {
                total += std::ceil((double)nums[i] / mid);
            }
            
            if (total > threshold) {
                l = mid + 1;
            } else {
                h = mid - 1;
            }
        }
        
        return l;
    }
};