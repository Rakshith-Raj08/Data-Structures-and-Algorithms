//{ Driver Code Starts
#include <bits/stdc++.h>

using namespace std;

// } Driver Code Ends
//User function template for C++
class Solution{
public:
	vector<int> findSubarray(int a[], int n) {
	    
	    int maxi = 0;
	    int sum=0;
	    int ansStart =-1;
	    int ansEnd = -1;
	    int start =0;
	    
	    for(int i=0;i<n;i++)
	    {
	        
	        if(a[i] <0)
	        {
	            sum =0;
	            start = i+1;
	            continue;
	        }
	        
	         sum = sum+a[i];
	        
	        if(sum>maxi)
	        {
	            maxi = sum;
	            ansStart = start;
	            ansEnd = i;
	        }
	        
	        else if(sum == maxi)
	        {
	            if((i - start) > (ansEnd - ansStart))
	            {
	                ansStart = start;
	                ansEnd = i;
	            }
	        }

	        
	    }
	    vector<int> ans;
	    
	    for(int  i=ansStart;i<=ansEnd;i++)
	    {
	        ans.push_back(a[i]);
	    }
	    
	    if(ans.size() ==0)
	    {
	        return {-1};
	    }
	    return ans;
 
	}
};