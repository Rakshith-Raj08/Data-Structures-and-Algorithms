class Solution{
  public:
    // arr[] : the input array
    // N : size of the array arr[]
    
    //Function to return length of longest subsequence of consecutive integers.
    int findLongestConseqSubseq(int arr[], int N)
    {
      int maxi=0;
      unordered_map<int,int>m;
      
      for(int i=0;i<N;i++)
      {
            m[arr[i]]=1;
            maxi=max(maxi,arr[i]);
      }
      
      int longest=0, ans=0;
      for(int i=0;i<=maxi;i++)
      {
          if(m[i]){
              longest++;
              ans=max(ans,longest);
          }
          else{
              longest=0;
          }
      }
      
      return ans;
    }
};