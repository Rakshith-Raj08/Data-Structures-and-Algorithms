class Solution {
  public:
    int maxOccured(int n, int l[], int r[], int maxx) {
        vector<int> arr(maxx + 2, 0);
        
        for (int i = 0; i < n; i++) {
            arr[l[i]] += 1;
            if (r[i] + 1 <= maxx) {
                arr[r[i] + 1] -= 1;
            }
        }
        
        int maxOccurrence = arr[0];
        int maxInteger = 0;
        int currentSum = arr[0];
        
        for (int i = 1; i <= maxx; i++) {
            currentSum += arr[i];
            if (currentSum > maxOccurrence) {
                maxOccurrence = currentSum;
                maxInteger = i;
            }
        }
        
        return maxInteger;
    }
};