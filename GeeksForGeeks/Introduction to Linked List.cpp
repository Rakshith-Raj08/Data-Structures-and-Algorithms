class Solution {
  public:
    Node* constructLL(vector<int>& arr) {
        Node *head=new Node(arr[0]);
        Node *current=head;
        for (int i=1;i<arr.size();i++){
            current->next=new Node(arr[i]);
            current=current->next;
        }
        return head;
    }
};