class Solution {
public:
    std::vector<int> duplicates(long long arr[], int n) {
        std::vector<int> duplicates;
        std::unordered_map<long long, int> frequency;

        
        for (int i = 0; i < n; ++i) {
            frequency[arr[i]]++;
        }

        
        for (auto& pair : frequency) {
            if (pair.second > 1) {
                duplicates.push_back(pair.first);
            }
        }

       
        if (duplicates.empty()) {
            return {-1};
        } else {
            std::sort(duplicates.begin(), duplicates.end());
            return duplicates;
        }
    }
};