class Solution {
public:
    int NumberofElementsInIntersection(int a[], int b[], int n, int m) {
        int count = 0;
        int i = 0;
        int j = 0;
        
        
        std::sort(a, a + n);
        std::sort(b, b + m);


       
        std::unordered_set<int> commonElements;

        while (i < n && j < m) {
            if (a[i] == b[j]) {
             
                if (commonElements.find(a[i]) == commonElements.end()) {
                    count++;
                    commonElements.insert(a[i]);
                }

                i++;
                j++;
            } else if (a[i] < b[j]) {
                i++;
            } else {
                j++;
            }
        }

        return count;
    }
};