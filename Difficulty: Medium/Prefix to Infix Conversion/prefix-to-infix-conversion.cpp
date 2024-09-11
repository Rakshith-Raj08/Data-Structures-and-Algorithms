//{ Driver Code Starts
// Initial Template for C++
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// User function Template for C++


class Solution {
  public:
   string preToInfix(string pre_exp) {
        // Write your code here
        string temp="";
        stack<string> con2;
        for(int i=pre_exp.size()-1;i>=0;i--){
            string a(1, pre_exp[i]);
            if(isalpha(pre_exp[i])){
                con2.push(a);
            }else{
               if (con2.size() >= 2) { 
                 temp = '(' + con2.top() + a;
                 con2.pop(); 
                 temp=temp + con2.top() + ')';
                 con2.pop(); 
                 con2.push(temp);
                }
            }
        }
        return temp;
    }
};

//{ Driver Code Starts.
int main() {
    int t = 1;
    cin >> t;

    // freopen ("output_gfg.txt", "w", stdout);

    while (t--) {
        // Input
        string prefix;
        cin >> prefix;

        Solution obj;
        cout << obj.preToInfix(prefix) << endl;

        // cout << "~\n";
    }
    // fclose(stdout);

    return 0;
}

// } Driver Code Ends