class Solution
{
public:
        unordered_set<string>st;
    bool f(int i, string& str){
        if(i==str.size())return true;
        string temp="";
        bool ans=false;
        for(int j=i;j<str.size();j++){
            temp+=str[j];
            if(st.find(temp)!=st.end())
                ans=ans||f(j+1,str);
        }
        return ans;
    }

    int wordBreak(string A, vector<string> &B) {
        for(int i=0;i<B.size();i++)
            st.insert(B[i]);
        return f(0,A);
    }
};