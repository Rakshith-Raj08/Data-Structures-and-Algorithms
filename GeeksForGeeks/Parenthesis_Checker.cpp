#include <stack>
#include <string>

class Solution {
public:
    // Function to check if brackets are balanced or not.
    bool ispar(std::string x) {
        // Initialize a stack to keep track of opening brackets
        std::stack<char> st;

        // Dictionary to map closing brackets to their corresponding opening brackets
        std::unordered_map<char, char> closing_to_opening = {{')', '('}, {']', '['}, {'}', '{'}};

        // Loop through each character in the string
        for (char c : x) {
            // If the character is an opening bracket, push it onto the stack
            if (c == '(' || c == '[' || c == '{') {
                st.push(c);
            }
            // If the character is a closing bracket
            else if (c == ')' || c == ']' || c == '}') {
                // If the stack is empty, return false (unbalanced brackets)
                if (st.empty()) {
                    return false;
                }
                // Pop the last opening bracket from the stack
                char last_opening = st.top();
                st.pop();
                // If the popped opening bracket does not match the current closing bracket, return false (unbalanced brackets)
                if (closing_to_opening[c] != last_opening) {
                    return false;
                }
            }
        }

        // If the stack is not empty, there are unmatched opening brackets
        return st.empty();
    }
};
