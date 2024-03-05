class Solution{
    public:
        
    int maxIndexDiff(int a[], int n) 
    {   
        int ans = 0;
        int idx = 0;
        
        for(int i = 0; i < n; i++){
            if(i + ans >= n){
                break;
            }
            for(int j = n - 1; j > max(i, idx); j--){
                if(a[i] <= a[j]){
                    ans = max(ans, j - i);
                    idx = max(idx, j);
                    break;
                }
            }
        }
        
        return ans;
    }
};