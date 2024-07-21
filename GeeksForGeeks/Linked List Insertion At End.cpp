class Solution {
  public:
    Node *insertAtEnd(Node *head, int x) {
        
         Node* newnum = new Node(x);
         
        if(head == NULL)
        {
            return newnum ;
        }
        Node* temp = head ;
        
        while(temp->next != NULL)
        {
            temp = temp->next;
        }
        
        temp->next = newnum;
        
        return head;
    }
};