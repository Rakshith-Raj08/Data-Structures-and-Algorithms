class Solution {
public:
    int findMagicalNumber(int N, vector<int> &arr) {
        int n = arr.size();
        for (int i = 0; i < n; ++i) {
            if (arr[i] == i) {
                return i; // Return the index if arr[i] == i
            }
        }
        return -1; // Return -1 if no magical number is found
    }
};