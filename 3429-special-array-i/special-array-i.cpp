class Solution {
public:
    bool isArraySpecial(vector<int>& nums) {
        int n = nums.size() ; 

        if(n == 0 || n == 1)
        {
            return true; 
        }

        int x = nums[0]% 2 ;

        for(int i = 0; i < n ; i++)
        {
            if(i%2 == 0)
            {
                if(nums[i]%2 != x)
                {
                    return false;
                }
            }

            else if(i%2 ==1)
            {
                if(nums[i]%2 == x)
                {
                    return false;
                }
            }

        }

        return true ;

    }
};