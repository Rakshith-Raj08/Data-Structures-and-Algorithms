class Solution{
  public:
     // Function to find majority element in the array
    // a: input array
    // size: size of input array
    int majorityElement(int a[], int size)
    {
        
        map<int, int>m;
       int ans=0;
      for(int i=0; i<size; i++){
          m[a[i]]++;
      }
      
      for(auto it:m){
          if(it.second>size/2){
             ans=it.first;
          }
        
      }
      
      if(ans==0)
        return {-1};
        return ans;
        
    }
};