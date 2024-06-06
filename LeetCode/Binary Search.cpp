class Solution {
public:

    int binary(vector<int>& nums, int low , int high , int target)
    {
        if(low > high)
        {
            return -1 ;
        }

        int mid = low + (high - low) / 2;

        if(nums[mid] == target)
        {
            return mid ;
        }

        else if (nums[mid] < target)
        {
           return binary(nums, mid+1 , high , target);
        }

        else 
        {
           return binary(nums, low, mid-1 , target);
        }
    }

    int search(vector<int>& nums, int target)
    {
        int high = nums.size() - 1;
        int low = 0 ;
        return binary(nums, low , high , target);
    }
};