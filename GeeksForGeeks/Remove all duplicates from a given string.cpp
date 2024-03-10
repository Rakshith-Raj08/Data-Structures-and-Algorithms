class Solution{
public:
	string removeDuplicates(string str) {
        // code here
        string s="";
        unordered_map<char,int>mp;
        for(int i=0;i<str.size();i++){
            mp[str[i]]++;
            if(mp[str[i]]>1){
                
            }
            else{
                s+=str[i];
            }
        }
        return s;
    }
};