class Solution{
public:
    vector<int> leaders(int a[], int n){
        vector<int> result;
        int max = a[n - 1];
        result.push_back(max);

        for (int i = n - 2; i >= 0; i--){
            if (a[i] >= max){
                max = a[i];
                result.push_back(max);
            }
        }
        reverse(result.begin(), result.end());

        return result;
    }
};
