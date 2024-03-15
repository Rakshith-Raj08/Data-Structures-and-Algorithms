class Solution{
public:	
	int search(int A[], int N){
	   unordered_map<int,int>mp;
        for(int i=0;i<N;i++){
            mp[A[i]]++;
        }
        for(auto i:mp){
            if(i.second==1){
                return i.first;
            }
        }
   
	    
	}
};