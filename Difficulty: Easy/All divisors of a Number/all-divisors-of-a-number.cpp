//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;

// } Driver Code Ends

class Solution {
  public:
    void print_divisors(int n) {
        // Code here.
        vector<int> lastHalf;
        for(int i=1; i*i <= n; i++){
            if(n%i==0){
                cout<<i<<" ";
                if(n/i != i)
                lastHalf.push_back(n/i);
            }
        }
        for(int i=lastHalf.size()-1; i>=0; i--)
        cout<<lastHalf[i]<<" ";
    }
};

//{ Driver Code Starts.
int main() {
    int T;
    cin >> T;
    while (T--) {
        int n;
        cin >> n;
        Solution ob;
        ob.print_divisors(n);
        cout << endl;
    }
    return 0;
}
// } Driver Code Ends