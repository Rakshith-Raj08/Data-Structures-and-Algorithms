class Solution {
public:
    string longestPalindrome(string str) {
    if (str.length() <= 1)
            return str;

        std::string LPS = "";

        for (int i = 0; i < str.length(); i++) {
            // Consider odd length
            int low = i;
            int high = i;
            while (low >= 0 && high < str.length() && str[low] == str[high]) {
                low--;
                high++;
            }
            std::string palindrome = str.substr(low + 1, high - low  -1 );
            if (palindrome.length() > LPS.length()) {
                LPS = palindrome;
            }

            // Consider even length
            low = i;
            high = i + 1;
            while (low >= 0 && high < str.length() && str[low] == str[high]) {
                low--;
                high++;
            }
            palindrome = str.substr(low + 1, high - low - 1);
            if (palindrome.length() > LPS.length()) {
                LPS = palindrome;
            }
        }

        return LPS;
    
    }
};