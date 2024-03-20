class Solution
{
    pair<int,int> sum(Node* root){
        if(root==NULL){
            pair<int,int>p;
            p={0,0};
            return p;
        }
        pair<int,int>left=sum(root->left);
        pair<int,int>right=sum(root->right);
        pair<int,int>ans;
        ans.first=max(left.first,right.first)+1;
        if(left.first>right.first){
            ans.second=left.second+root->data;
            
        }
        else if(left.first<right.first){
            ans.second=right.second+root->data;
        }
        else{
            ans.second=max(left.second,right.second)+root->data;
        }
        return ans;
    }
public:
    
    int sumOfLongRootToLeafPath(Node *root)
    {
        return sum(root).second;
    }
};

