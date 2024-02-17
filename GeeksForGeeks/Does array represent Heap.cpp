class Solution{
    public:
    bool isMaxHeap(int arr[], int n)
    {
        // Start from the first non-leaf node
        for (int i = n / 2 - 1; i >= 0; i--) {
            // Check if the node is greater than or equal to its left child
            if (2 * i + 1 < n && arr[i] < arr[2 * i + 1])
                return false;
            // Check if the node is greater than or equal to its right child
            if (2 * i + 2 < n && arr[i] < arr[2 * i + 2])
                return false;
        }
        return true;
    }
};