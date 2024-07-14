#include <string>

class Solution {
public:
    std::string largestOddNumber(std::string num) {
        int n = num.size();
        
        // Traverse the string from the end to the beginning
        for (int i = n - 1; i >= 0; --i) {
            // Check if the current digit is odd
            if ((num[i] - '0') % 2 != 0) {
                // Return the substring from the start to the current index
                return num.substr(0, i + 1);
            }
        }
        
        // If no odd digit is found, return an empty string
        return "";
    }
};
