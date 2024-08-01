//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution {
  public:
    void bitManipulation(int num, int i) {
       int x;
        
        //Get ith bit
        x=num & (1<<i-1);
        if(x!=0)cout<<1;
        else cout<<0;
        cout<<" ";
        
        //Set ith bit
        x=num | (1<<i-1);
        cout<<x;
        cout<<" ";
        
        //Clear ith bit
        // x=num & (1<<i-1);
        // if(x!=0){
        // x= num ^ (1<<i-1);
        // cout<<x;
        // }
        // else{
        // cout<<num;
        // }
        
        //OR
        int z = num & (~(1<<i-1));
        cout<< z;
    }
};

//{ Driver Code Starts.

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, i;
        cin >> n >> i;
        Solution ob;
        ob.bitManipulation(n, i);
        cout << "\n";
    }
    return 0;
}
// } Driver Code Ends