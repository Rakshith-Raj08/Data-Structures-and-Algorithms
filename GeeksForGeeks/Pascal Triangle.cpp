class Solution{
public:
    vector<long long> calc(int l, int n, vector<long long> &v)
    {
        vector<long long> ans;
        ans.push_back(1);
        
        if(l > 2) // l-1 > 1
            for(long long i = 1; i < l-1; i++)
                ans.push_back((v[i-1] + v[i]) % 1000000007);
        
        ans.push_back(1);
        
        if(l == n) return ans;
        return calc(l+1, n, ans);
    }
    vector<long long> nthRowOfPascalTriangle(int n) {
        vector<long long> v;
        v.push_back(1);
        if(n == 1) return v;
        return calc(2, n, v);
    }
};