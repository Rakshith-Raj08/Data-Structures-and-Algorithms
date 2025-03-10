//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
// class implemented

struct Item{
    int value;
    int weight;
};


class Solution {
  public:
    bool static comp(Item a, Item b){
        double x=(double) a.value/(double) a.weight;
        double y=(double) b.value/(double) b.weight;
        return x>y;
    }
    // Function to get the maximum total value in the knapsack.
    double fractionalKnapsack(vector<int>& values, vector<int>& weights, int w) {
        // Your code here
        vector<Item> item;
        for(int i=0;i<values.size();i++){
            item.push_back({values[i],weights[i]});
        }
        
        sort(item.begin(),item.end(),comp);
        double ans=0;
        for(int i=0;i<item.size();i++){
            if(item[i].weight<=w){
                ans+=item[i].value;
                w-=item[i].weight;
            }
            else{
                ans+=((double)item[i].value/item[i].weight)*w;
                break;
            }
        }
        return ans;
    }
}; 


//{ Driver Code Starts.

int main() {

    int t;
    // taking testcases
    cin >> t;
    cin.ignore(); // to ignore the newline after the number of test cases
    cout << setprecision(6) << fixed;

    while (t--) {
        // Reading the value array
        vector<int> values;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            values.push_back(number);
        }

        // Reading the weight array
        vector<int> weights;
        getline(cin, input);
        stringstream ss2(input);
        while (ss2 >> number) {
            weights.push_back(number);
        }

        // Reading the capacity
        int w;
        cin >> w;
        cin.ignore(); // to ignore the newline after capacity

        // function call
        Solution ob;
        cout << ob.fractionalKnapsack(values, weights, w) << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends