class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        // Calculate lengths of both lists
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

        // Reset pointers to the heads of the lists
        tempA = headA;
        tempB = headB;

        // Advance the pointer of the longer list by the difference in lengths
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

        // Move both pointers until they meet at the intersection or reach the end
        while (tempA != NULL && tempB != NULL) {
            if (tempA == tempB) {
                return tempA; // Intersection node
            }
            tempA = tempA->next;
            tempB = tempB->next;
        }

        return NULL; // No intersection
    }
};
