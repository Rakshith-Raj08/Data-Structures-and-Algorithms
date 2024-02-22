class Solution
{
    public:
    int subsequenceCount(string S, string T)
    {
        int M=1e9+7;   
        int n = S.length(), m=T.length();
        int dp[m+1][n+1]={0};
        for(int i=0;i<n;i++)
            dp[0][i]=1;
        if(m>n)
            return 0;
        if(m==n && S==T)
            return 1;
        for(int i=0;i<m;i++){
            for(int j=i;j<n;j++){
                if(T[i]==S[j])
                    dp[i+1][j+1] = dp[i][j];
                dp[i+1][j+1]=(dp[i+1][j]+dp[i+1][j+1])%M;
            }
        }
        return dp[m][n];
    }
};
 