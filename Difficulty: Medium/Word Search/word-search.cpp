//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    bool isWordExist(vector<vector<char>>& mat, string& word) {
        int n = mat.size();
        int m = mat[0].size();

        // Lambda function for DFS traversal
        function<bool(int, int, int)> dfs = [&](int i, int j, int index) {
            // Base case: if we've matched all characters
            if (index == word.size()) return true;

            // Boundary conditions and character mismatch
            if (i < 0 || i >= n || j < 0 || j >= m || mat[i][j] != word[index]) {
                return false;
            }

            // Mark the current cell as visited (temporarily modify the cell)
            char temp = mat[i][j];
            mat[i][j] = '#';

            // Explore all four directions (up, down, left, right)
            bool found = dfs(i + 1, j, index + 1) ||
                         dfs(i - 1, j, index + 1) ||
                         dfs(i, j + 1, index + 1) ||
                         dfs(i, j - 1, index + 1);

            // Backtrack: restore the original character
            mat[i][j] = temp;

            return found;
        };

        // Start DFS from every cell
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if (mat[i][j] == word[0]) {  // Start only if the first character matches
                    if (dfs(i, j, 0)) {
                        return true;
                    }
                }
            }
        }

        return false;  // Word not found
    }
};


//{ Driver Code Starts.
int main() {
    int tc;
    cin >> tc;
    while (tc--) {
        int n, m;
        cin >> n >> m;
        vector<vector<char>> mat(n, vector<char>(m, '*'));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < m; j++)
                cin >> mat[i][j];
        string word;
        cin >> word;
        Solution obj;
        bool ans = obj.isWordExist(mat, word);
        if (ans)
            cout << "true\n";
        else
            cout << "false\n";

        cout << "~"
             << "\n";
    }
    return 0;
}
// } Driver Code Ends