class Solution {
public:
    int longestOnes(vector<int>& nums, int k) {
        int l =0 , r = 0 ; 
        int n = nums.size();
        int zero =0 , len = 0 ; 

        while(r< n)
        {
            if(nums[r] == 0)
            {
                zero++ ; 
            }
            while(zero > k)
            {
                if(nums[l] == 0)
                 {
                    zero--;
                }
                 l++;
            }
            

            len = max(len , r-l+1);
            r++;
        }
        return len ; 
    }
};