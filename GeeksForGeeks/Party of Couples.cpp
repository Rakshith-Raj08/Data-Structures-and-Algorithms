class Solution{
    public:
       int findSingle(int n, int arr[])
    {
       int x = 0;
       for(int i = 0; i < n; i++)
       {
           x = x ^ arr[i];
       }
       return x;
        // code here
    }


};