class Solution {
public:
    int characterReplacement(string s, int k) {
        unordered_map<char, int> freq; 
    int left = 0, maxLength = 0, maxCount = 0; 

    for (int right = 0; right < s.size(); right++) {
      
        freq[s[right]]++;
        
        maxCount = max(maxCount, freq[s[right]]);
        
        if (right - left + 1 - maxCount > k) {
            freq[s[left]]--;
            left++;
        }
        
        maxLength = max(maxLength, right - left + 1);
    }

    return maxLength;
    }
};