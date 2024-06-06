class Solution{
public:
    int firstOccurence(int nums[],int n, int target){
        int start = 0;
        int end = n - 1;
        int mid = start + (end-start)/2;
        int ans = -1;
 
        while(start <= end){
            if(nums[mid] == target){
                ans = mid;
                end = mid-1;
            }
            else if(nums[mid] > target)
                end = mid-1;
            else
                start = mid+1;
 
            mid = start + (end-start)/2;
        }
        return ans;
    }
    int lastOccurence(int nums[], int n, int target){
        int start = 0;
        int end = n - 1;
        int mid = start + (end-start)/2;
        int ans = -1;
 
        while(start <= end){
            if(nums[mid] == target){
                ans = mid;
                start = mid+1;
            }
            else if(nums[mid] > target)
                end = mid-1;
            else
                start = mid+1;
 
            mid = start + (end-start)/2;
        }
        return ans;
    }
int count(int arr[], int n, int x) {
    int first = firstOccurence(arr,n,x);
    int last = lastOccurence(arr,n,x);
    
    if(first == -1 && last == -1)
        return 0;
    
    return last-first+1;
}
};