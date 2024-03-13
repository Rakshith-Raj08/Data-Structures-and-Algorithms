class Solution{
  public:
    vector<int> matrixDiagonally(vector<vector<int>>&mat)
    {
        int rows = mat.size();
    int cols = mat[0].size();
    std::vector<int> output;

    for (int k = 0; k < rows + cols - 1; k++) {
        if (k % 2 == 0) { // Moving up-right
            for (int i = std::min(k, rows - 1); i >= 0 && k - i < cols; i--) {
                output.push_back(mat[i][k - i]);
            }
        } else { // Moving down-left
            for (int i = std::min(k, cols - 1); i >= 0 && k - i < rows; i--) {
                output.push_back(mat[k - i][i]);
            }
        }
    }

    return output;
    }
};