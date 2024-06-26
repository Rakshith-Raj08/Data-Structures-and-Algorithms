class Solution
{
    private:
    void findMinAbsoluteDiff(Node* node, int& prevValue, int& minAbsoluteDiff) {
        if (node == NULL) return;
        
        findMinAbsoluteDiff(node->left, prevValue, minAbsoluteDiff);
        
        if (prevValue != -1) {
            minAbsoluteDiff = min(minAbsoluteDiff, abs(node->data - prevValue));
        }
        
        prevValue = node->data;
        
        findMinAbsoluteDiff(node->right, prevValue, minAbsoluteDiff);
    }
    
    public:
    int absolute_diff(Node *root)
    {
        int minAbsoluteDiff = INT_MAX;
        int prevValue = -1;
        
        findMinAbsoluteDiff(root, prevValue, minAbsoluteDiff);
        
        return minAbsoluteDiff;
    }
};
