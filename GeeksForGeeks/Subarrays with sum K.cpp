class Solution{
    public:
    int findSubArraySum(int Arr[], int N, int k)
    {
        
     int res=0;
        unordered_map<int,int> mp;
        int pre_sum=0;
        for(int i=0;i<N;i++)
        {
            pre_sum+=Arr[i];
            if(pre_sum==k)
            {
                res++;
                if(mp.find(pre_sum-k)!=mp.end())
                res+=mp[pre_sum-k];}
            else
            {
                if(mp.find(pre_sum-k)!=mp.end())
                    res+=mp[pre_sum-k];
            }
            mp[pre_sum]++;
        }
      return res;
    }
};