class Solution {
  public:
    // Function to count nodes of a linked list.
    bool searchKey(int n, struct Node* head, int key) {
        
       if (n == 1) {
         return head->data == key;
        }
    
        
        
        if(n == 0 )
        {
            return false;
        }
        
        Node* temp = head;
        
        while(temp->next != NULL)
        {
            if(temp->data == key)
            {
                return true;
            }
            
            temp = temp->next;
        }
        
        return false ;
    }
};