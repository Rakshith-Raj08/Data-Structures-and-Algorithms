//{ Driver Code Starts
//Initial Template for C++
#include<bits/stdc++.h>
using namespace std;


// } Driver Code Ends
//User function Template for C++

class Solution{
public:
    vector<int> count_NGE(int n, vector<int> &arr, int queries, vector<int> &indices){
        vector<int> result(queries, 0);  // Result vector to store the counts
        
        // Loop through each query
        for(int j = 0; j < queries; j++) {
            int val = indices[j];  // Get the index from the query
            
            // Loop to find how many numbers are greater than arr[val]
            for(int i = val + 1; i < n; i++) {
                if(arr[val] < arr[i]) {
                    result[j]++;  // Increment the count for current query
                }
            }
        }
        
        return result;  // Return the vector containing counts for each query
    }
};


//{ Driver Code Starts.
int main(){
    int t = 1;
    cin >> t;

    // freopen ("output_gfg.txt", "w", stdout);

    while(t--){
        //Input

       int n; cin >> n;
       vector<int> v1(n);
       for(int i = 0;i<n;i++) cin >> v1[i];
        int q; cin >> q;
        vector<int> v2(q);
        for(int i = 0;i<q;i++) cin >> v2[i];

        Solution obj;
        vector<int> ans = obj.count_NGE(n,v1,q,v2);

        for(int i = 0;i<ans.size();i++)
            cout << ans[i] << " ";
        cout << endl;

        
        // cout << "~\n";
    }
    // fclose(stdout);

    return 0;
}
// } Driver Code Ends