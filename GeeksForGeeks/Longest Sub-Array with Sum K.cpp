class Solution{
    public:
    int lenOfLongSubarr(int A[], int N, int K) 
    { 
        map<long long, int> preSumMap;
        long long sum = 0;
        int maxLen = 0;
        for (int i = 0; i < N; i++) {
            // Calculate the prefix sum till index i:
            sum += A[i];

            // If the sum = K, update the maxLen:
            if (sum == K) {
                maxLen = max(maxLen, i + 1);
            }

            // Calculate the sum of the remaining part i.e. X - K:
            long long rem = sum - K;

            // Calculate the length and update maxLen:
            if (preSumMap.find(rem) != preSumMap.end()) {
                int len = i - preSumMap[rem];
                maxLen = max(maxLen, len);
            }

            // Finally, update the map checking the conditions:
            if (preSumMap.find(sum) == preSumMap.end()) {
                preSumMap[sum] = i;
            }
        }

        return maxLen;
    } 
};