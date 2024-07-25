//{ Driver Code Starts
//Initial template for C++

#include <bits/stdc++.h> 
using namespace std; 

struct Node
{
    int data;
    struct Node* next;
    
    Node(int x){
        data = x;
        next = NULL;
    }
};

void printList(Node* node) 
{ 
    while (node != NULL) { 
        cout << node->data%10; 
        node = node->next; 
    }  
    cout<<"\n";
} 


// } Driver Code Ends
//User function template for C++

/* 

struct Node
{
    int data;
    struct Node* next;
    
    Node(int x){
        data = x;
        next = NULL;
    }
};

*/

class Solution
{
    public:
    Node* fun(Node *head,int cnt){
        //base condition
        if(cnt==0){
            if(head->data==0){
                   head->data=0;   
             Node* n=new Node(1);
             Node* temp1=head;
             head=n;
             head->next=temp1;
             return head;  
            }
            if(head->data<9){
                 head->data=head->data+1;
                 return head;
            }
        }
        int ptr=1;
        Node* temp=head;
        while(cnt!=ptr){
            temp=temp->next;
            ptr++;
        }
        if(temp->data<9){
            temp->data=temp->data+1;
            return head;
        }else{
          temp->data=0;
        head = fun(head,cnt-1);
        }
        return head;
    }
    Node* addOne(Node *head) 
    {
        // Your Code here
        // return head of list after adding one
        int cnt=1;
        Node* temp=head;
        //count number of nodes in SLL
        while(temp->next!=NULL){
            temp=temp->next;
            cnt++;
        }
        //if value of last node is less than 9 then simply increment that value
        if(temp->data<9){
            temp->data=temp->data+1;
            return head;
        }
        //otherwise set it to 0 and again traverse to the node beforee last node
        temp->data=0;
        return fun(head,cnt-1);
    }
};

//{ Driver Code Starts.

int main() 
{ 
    int t;
    cin>>t;
    while(t--)
    {
        string s;
        cin>>s;
        
        Node* head = new Node( s[0]-'0' );
        Node* tail = head;
        for(int i=1; i<s.size(); i++)
        {
            tail->next = new Node( s[i]-'0' );
            tail = tail->next;
        }
        Solution ob;
        head = ob.addOne(head);
        printList(head); 
    }
    return 0; 
} 

// } Driver Code Ends