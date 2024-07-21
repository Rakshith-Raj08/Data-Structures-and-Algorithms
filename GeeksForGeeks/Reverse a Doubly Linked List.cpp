class Solution
{
    public:
    Node* reverseDLL(Node * head)
     {
        //Your code here
        Node* curr = head;
        Node* prev = NULL;
        while(curr!=NULL){
            Node* frwd = curr->next;
            curr->next = prev;
            curr->prev = frwd;
            prev = curr;
            curr = frwd;
        }
        return prev;
    }
};