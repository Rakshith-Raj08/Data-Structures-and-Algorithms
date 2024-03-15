class Solution
{
    public:
    int maxConsecutiveOnes(int N)
    {
       std::vector<int> binaryArray;
        // Convert N to binary and store in binaryArray
        while (N > 0) {
            binaryArray.insert(binaryArray.begin(), N % 2);
            N /= 2;
        }
        
        int maxCount = 0;
        int count = 0;
        for (int digit : binaryArray) {
            if (digit == 1) {
                count++;
                maxCount = std::max(maxCount, count);
            } else {
                count = 0;
            }
        }
        
        return maxCount;
    }
};