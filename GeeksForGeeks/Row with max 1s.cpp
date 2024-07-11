class Solution {
   public:
    int rowWithMax1s(vector<vector<int> > arr, int n, int m) {
        
        int index = -1;
        int max = -1;
        int count = 0;
        
        for(int i = 0; i < n; i++){
                int start = 0;
                int end = m-1;
                
            while(start <= end){
                int mid = start + (end-start)/2;
                
                if(arr[i][mid] == 1){
                    end = mid - 1;
                    count = m-mid;
                    
                    if(count > max){
                    max = count;
                    index = i;
                    }
               }
            else
                start = mid+1;
            }
        }
        return index;
    }
};