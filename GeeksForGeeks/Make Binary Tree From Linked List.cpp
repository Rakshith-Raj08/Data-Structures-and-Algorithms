class Solution {
public:
    void convert(Node* head, TreeNode*& root) {
        if (!head) return;

        // Initialize the root of the binary tree with the first node of the linked list
        root = new TreeNode(head->data);
        TreeNode* currentTreeNode = root;
        Node* temp = head->next;

        // Loop through the linked list to create the binary tree
        while (temp) {
            // Create the left child node
            currentTreeNode->left = new TreeNode(temp->data);
            currentTreeNode = currentTreeNode->left;
            temp = temp->next;

            // Check if there is another node in the linked list for the right child
            if (temp) {
                currentTreeNode->right = new TreeNode(temp->data);
                currentTreeNode = currentTreeNode->right;
                temp = temp->next;
            }
        }
    }
};