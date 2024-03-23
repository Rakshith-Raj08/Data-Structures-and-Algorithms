class Solution{
public:
    //Function to find the days of buying and selling stock for max profit.
    vector<vector<int> > stockBuySell(vector<int> A, int n){
        // code here
        int st = 0;
        vector<vector<int>> ans;
        for(int i=1;i<n;i++){
            if(A[i-1]>=A[i]){
                if(A[st]<A[i-1])
                    ans.push_back({st,i-1});
                st = i;
            }
        }
        if(A[st]<A[n-1])
            ans.push_back({st,n-1});
            
        return ans;
        
    }
};