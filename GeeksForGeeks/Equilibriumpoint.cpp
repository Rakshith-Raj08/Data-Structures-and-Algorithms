class Solution{
    public:
    int equilibriumPoint(long long a[], int n) {
        // Your code here
        long long int i = 0;
        long long int sum = 0;
        for(i = 0; i<n; i++)
        sum += a[i];
        
        long long int sum_left = 0;
        for(i = 0; i<n; i++)
        {
            sum -= a[i];
            if(sum == sum_left)
            return i+1;
            sum_left += a[i];
        }
        
        return -1;
    }

};
