lass Solution {
  public:
      void solve(Node* root, vector<int> path, vector<vector<int>> &ans)
    {
        if(root == NULL)
            return;
        path.push_back(root->data);
        if(root->left == NULL && root->right == NULL)
            ans.push_back(path);
        solve(root->left, path, ans);
        solve(root->right, path, ans);
    }
    vector<vector<int>> Paths(Node* root) 
    {
        vector<vector<int>> ans;
        vector<int> path;
        solve(root,path,ans);
        return ans;
        // code here
    }


};