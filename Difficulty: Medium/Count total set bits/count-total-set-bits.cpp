//{ Driver Code Starts
//Initial Template for C++

#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

class Solution{
    public:
    // n: input to count the number of set bits
    //Function to return sum of count of set bits in the integers from 1 to n.
   int countSetBits(int n)
    {
        int count = 0;
        for (int i = 0; i < 31; i++) {
            // Calculate the number of full cycles of 2^(i+1) in n
            int fullCycles = (n + 1) / (1 << (i + 1));
            // Calculate the remaining part after full cycles
            int remainder = (n + 1) % (1 << (i + 1));
            
            // Add the set bits from full cycles and the remaining part
            count += fullCycles * (1 << i) + max(0, remainder - (1 << i));
        }
        return count;
    }
};


//{ Driver Code Starts.

// Driver code
int main()
{
	 int t;
	 cin>>t;// input testcases
	 while(t--) //while testcases exist
	 {
	       int n;
	       cin>>n; //input n
	       Solution ob;
	       cout << ob.countSetBits(n) << endl;// print the answer
	  }
	  return 0;
}

// } Driver Code Ends