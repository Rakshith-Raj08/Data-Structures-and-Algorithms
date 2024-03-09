class Solution{
  public:
    char nthCharacter(string s, int r, int n) {
       
        string ns="";
       
        while(r--){
             int count=0;
            for(int i=0;i<s.length();i++){
                if(s[i]=='1'){
                    ns+="10";
                    
                }
                else{
                    ns+="01";
                }
                count+=2;
                if(count>n){
                    break;
                }
                
            }
            s=ns;
            ns="";
        }
        return s[n];
  }
};