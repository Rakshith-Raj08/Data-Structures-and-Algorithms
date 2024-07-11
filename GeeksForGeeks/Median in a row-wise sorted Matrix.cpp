#include <vector>
#include <climits>
#include <algorithm>

class Solution {
public:
    // Function to find the upper bound index in a row
    int upperbound(const std::vector<int>& matrix, int x, int n) {
        int ans = n;
        int l = 0, h = n - 1;
        while (l <= h) {
            int mid = (l + h) / 2;
            if (matrix[mid] > x) {
                ans = mid;
                h = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans;
    }

    // Function to count how many elements are <= x in the matrix
    int blackbox(const std::vector<std::vector<int>>& matrix, int n, int m, int x) {
        int cnt = 0;
        for (int i = 0; i < n; ++i) {
            cnt += upperbound(matrix[i], x, m);
        }
        return cnt;
    }

    // Function to find the median of the matrix
    int median(std::vector<std::vector<int>>& matrix, int r, int c) {
        int low = INT_MAX;
        int high = INT_MIN;
        int n = r;
        int m = c;
        for (int i = 0; i < n; ++i) {
            low = std::min(low, matrix[i][0]);
            high = std::max(high, matrix[i][m - 1]);
        }
        int req = (r * c) / 2;
        while (low <= high) {
            int mid = (low + high) / 2;
            int small = blackbox(matrix, n, m, mid);
            if (small <= req) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return low;
    }
};
