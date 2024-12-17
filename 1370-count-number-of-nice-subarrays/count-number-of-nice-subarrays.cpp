class Solution {
public:

    int givemeresult(vector<int>& nums, int k)
    {
        int head, tail = 0, sum = 0, result = 0;
        for (head = 0; head < nums.size(); head++) {
            if(nums[head]%2 != 0)
            {
                sum++;
            }

            while (sum > k && tail <= head) {
                if(nums[tail]%2 != 0)
                {
                    sum--; 
                }
                tail++;
            }
            result += head - tail + 1;
        }
        return result;
        
    }

    int numberOfSubarrays(vector<int>& nums, int k) {
        return givemeresult(nums,k) - givemeresult(nums,k-1);
        
    }
};