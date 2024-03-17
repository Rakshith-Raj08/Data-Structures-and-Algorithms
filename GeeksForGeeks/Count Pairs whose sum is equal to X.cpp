class Solution{
  public:
    
    int countPairs(struct Node* head1, struct Node* head2, int x) {
      
        
  
        int result = 0;
        unordered_set<int> set;
        while(head1 != NULL){
            set.insert(head1->data);
            head1 = head1->next;
        }
        while(head2 != NULL){
            if(set.find((x - head2->data)) != set.end())
                result++;
            head2 = head2->next;
        }
        return result;
        
    }
};