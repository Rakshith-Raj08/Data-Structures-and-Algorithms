class Solution{
public:
	
	long long sumBitDifferences(int arr[], int n) {
	    // code here 
	    long long  ans = 0;
	    for(int i = 0;i<32;i++){
	        int count = 0;
	        for(int j = 0;j<n;j++) if(((arr[j]) & (1<<i))) count++;
	        
	       // Add "count * (n - count) * 2" to the answer
	        ans +=  2LL * count * (n-count) ;
	    }
	    return ans;
	}
};