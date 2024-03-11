class Solution {
public:    
    
    int countPairs(vector<vector<int>> &mat1, vector<vector<int>> &mat2, int n, int x) {
        int count = 0;
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                int left = 0, right = n - 1;
                while (left < n && right >= 0) {
                    int sum = mat1[i][left] + mat2[right][j];
                    if (sum == x) {
                        ++count;
                        ++left;
                        --right;
                    } else if (sum < x) {
                        ++left;
                    } else {
                        --right;
                    }
                }
            }
        }
        return count;
    }
};
