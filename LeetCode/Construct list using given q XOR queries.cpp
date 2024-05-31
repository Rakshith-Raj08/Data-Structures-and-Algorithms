class Solution {
  public:
    vector<int> constructList(int q, vector<vector<int>> &queries) {
        // code here
        vector<int> res;
        int temp=0;
        int n=queries.size();
        
       for (int i = n-1; i >=0; i--) {
            if (queries[i][0] == 0) {
                res.push_back(queries[i][1]^temp);
            }
            else{
                temp^=queries[i][1];
            }
            
        }
        res.push_back(temp);
       
        
        sort(res.begin(), res.end());
        return res;
    }
};