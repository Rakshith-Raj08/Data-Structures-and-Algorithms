class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
  
        ListNode* tempA = headA;
        ListNode* tempB = headB;

        int lengthA = 0, lengthB = 0;

        while (tempA != NULL) {
            lengthA++;
            tempA = tempA->next;
        }

        while (tempB != NULL) {
            lengthB++;
            tempB = tempB->next;
        }

  
        tempA = headA;
        tempB = headB;

       
        if (lengthA > lengthB) {
            int ahead = lengthA - lengthB;
            while (ahead > 0) {
                tempA = tempA->next;
                ahead--;
            }
        } else if (lengthB > lengthA) {
            int ahead = lengthB - lengthA;
            while (ahead > 0) {
                tempB = tempB->next;
                ahead--;
            }
        }

        
        while (tempA != NULL && tempB != NULL) {
            if (tempA == tempB) {
                return tempA; 
            }
            tempA = tempA->next;
            tempB = tempB->next;
        }

        return NULL; 
    }
};
