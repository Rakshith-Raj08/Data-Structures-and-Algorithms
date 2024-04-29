class Solution{
  public:
    int threeSumClosest(vector<int> arr, int target) {
        sort(arr.begin(), arr.end());
        int closest_sum = INT_MAX;
        int max_sum = INT_MIN;

        for (int i = 0; i < arr.size() - 2; i++) {
            int left = i + 1;
            int right = arr.size() - 1;

            while (left < right) {
                int current_sum = arr[i] + arr[left] + arr[right];

                if (abs(target - current_sum) < abs(target - closest_sum)) {
                    closest_sum = current_sum;
                    max_sum = current_sum;
                } else if (abs(target - current_sum) == abs(target - closest_sum)) {
                    max_sum = max(max_sum, current_sum);
                }

                if (current_sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return max_sum;
    }
};