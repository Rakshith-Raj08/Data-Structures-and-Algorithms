class Solution {
  public:
    vector<vector<int>> rotateMatrix(int k, vector<vector<int>> mat) {
        // code here
        k = k%mat[0].size();
        
        for(int i=0;i<mat.size();i++){
            rotate(mat[i].begin(), mat[i].begin()+k, mat[i].end());
        }
        
        return mat;
    }
};