#include <unordered_map>

class Solution {
public:
    int getPairsCount(int arr[], int n, int k) {
        std::unordered_map<int, int> frequency;
        int pairsCount = 0;

       
        for (int i = 0; i < n; ++i) {
            frequency[arr[i]]++;
        }

        
        for (int i = 0; i < n; ++i) {
            
            int complement = k - arr[i];
            
            
            if (frequency.find(complement) != frequency.end()) {
                
                if (complement == arr[i]) {
                    pairsCount += frequency[complement] - 1;
                } else {
                    pairsCount += frequency[complement];
                }
            }
        }

        
        return pairsCount / 2;
    }
};
