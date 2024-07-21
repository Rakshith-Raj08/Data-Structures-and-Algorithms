void addNode(Node *head, int pos, int data)
{
    Node* temp=head;
    Node* newNode=new Node(data);
    for(int i=0;i<pos;i++){
        temp=temp->next;
    }
    
    if(temp->next==NULL){
        temp->next=newNode;
        newNode->prev=temp;
        newNode->next=NULL;
    }
    else{
       newNode->prev=temp;
       temp->next->prev=newNode;
       newNode->next=temp->next;
       temp->next=newNode;
    }
}