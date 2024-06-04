class Solution{
public:
    vector<int> findTwoElement(vector<int> arr, int n) 
    {
        // code here
        unordered_map<int,int>  mp ; 
        for(int i =0 ; i < n ; i ++) 
        {
            mp[arr[i]] ++ ; 
        }  
        int n2 = 0 ,  nm = 0 ;  
        for(int i = 1 ; i <=n ; i ++) 
        {
            if(mp[i] == 2)  
            n2 = i ; 
            if(mp[i] == 0) 
            nm = i ; 
        } 
        return {n2,nm} ;   
    } 
};