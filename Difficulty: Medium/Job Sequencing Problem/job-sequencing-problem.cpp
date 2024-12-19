//{ Driver Code Starts
// Program to find the maximum profit job sequence from a given array
// of jobs with deadlines and profits
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends

class Solution {
  public:
    vector<int> JobSequencing(vector<int> &id, vector<int> &deadline,
                              vector<int> &profit) {
        int n = id.size();
        
        // Structure to represent a job
        struct Job {
            int id;
            int deadline;
            int profit;
        };
        
        // Create a list of jobs
        vector<Job> jobs(n);
        for (int i = 0; i < n; i++) {
            jobs[i] = {id[i], deadline[i], profit[i]};
        }
        
        // Sort jobs in descending order of profit
        sort(jobs.begin(), jobs.end(), [](Job a, Job b) {
            return a.profit > b.profit;
        });
        
        // Find the maximum deadline
        int maxDeadline = 0;
        for (auto job : jobs) {
            maxDeadline = max(maxDeadline, job.deadline);
        }
        
        // Create a time slots array to keep track of scheduled jobs
        vector<int> slots(maxDeadline + 1, -1);
        int maxProfit = 0, jobCount = 0;
        
        // Schedule jobs
        for (auto job : jobs) {
            // Try to find a free slot for this job
            for (int j = job.deadline; j > 0; j--) {
                if (slots[j] == -1) { // If the slot is free
                    slots[j] = job.id; // Assign the job
                    maxProfit += job.profit; // Add the profit
                    jobCount++; // Increment the job count
                    break;
                }
            }
        }
        
        return {jobCount, maxProfit};
    }
};



//{ Driver Code Starts.
//            Driver program to test methods
int main() {
    int t;
    // testcases
    cin >> t;
    cin.ignore();
    while (t--) {
        vector<int> jobIDs, deadlines, profits;
        string temp;
        getline(cin, temp);
        istringstream ss1(temp);
        int x;
        while (ss1 >> x)
            jobIDs.push_back(x);

        getline(cin, temp);
        istringstream ss2(temp);
        while (ss2 >> x)
            deadlines.push_back(x);

        getline(cin, temp);
        istringstream ss3(temp);
        while (ss3 >> x)
            profits.push_back(x);

        int n = jobIDs.size();

        Solution obj;
        vector<int> ans = obj.JobSequencing(jobIDs, deadlines, profits);
        cout << ans[0] << " " << ans[1] << endl;

        cout << "~"
             << "\n";
    }
    return 0;
}

// } Driver Code Ends