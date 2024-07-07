#define ll long long

class Solution {
public:
    int splitArray(vector<int>& nums, int k) {
        ll n = nums.size();
        if (n < k) return -1;

        ll low = 0, high = 0;
        for (auto i: nums) {
            low = max(low, 1ll*i);
            high += i;
        }

        ll res = -1;
        while (low <= high) {
            ll mid = low + (high - low)/2;
            ll cnt = 1;
            ll sum = 0;

            for (auto i: nums) {
                if (sum + i <= mid) sum += i;
                else {
                    sum = i;
                    cnt ++;
                }
            }

            if (cnt > k) low = mid + 1;
            else {
                res = mid;
                high = mid - 1;
            }
        }

        return res;
    }
};