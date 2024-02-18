class Solution
{
    public:
        /*You are required to complete below method */
        int sum = 0;
        void SumOfLeafOfBST(Node *root)
        {
            if(root == NULL)
                return;
                
            sumOfLeafNodes(root->left);
            if(root->left == NULL && root->right == NULL)
            {
                sum += root->data;
            }
            sumOfLeafNodes(root->right);
        }
        
        int sumOfLeafNodes(Node *root ){
             /*Your code here */
            
            SumOfLeafOfBST(root);
            
            return sum;
            
        }
};