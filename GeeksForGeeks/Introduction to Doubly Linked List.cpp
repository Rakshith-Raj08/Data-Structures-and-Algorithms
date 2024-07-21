class Solution {
  public:
    Node* constructDLL(vector<int>& arr) {
        
        // handling the edge case if array is empty
        if (arr.empty()) {
        return nullptr;
    }
       Node* head = new Node(arr[0]);
       Node* temp = head;
        for(int i=1; i<arr.size(); i++){
            Node* newNode = new Node(arr[i]);
            temp->next = newNode;
            newNode->prev = temp;
            temp = newNode;
            
        }
        return head;
    }
};