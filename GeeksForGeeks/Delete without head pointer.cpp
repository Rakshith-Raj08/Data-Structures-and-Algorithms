class Solution
{
    public:
    //Function to delete a node without any reference to head pointer.
    void deleteNode(Node *del_node)
    {
       Node* prev=NULL;
       while(del_node->next){
           prev=del_node;
           del_node->data=del_node->next->data;
           del_node=del_node->next;
       }
       prev->next=NULL;
    }



};