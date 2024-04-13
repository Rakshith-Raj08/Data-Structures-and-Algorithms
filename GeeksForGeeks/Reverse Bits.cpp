class Solution {
  public:
    long long reversedBits(long long x) {
        long long ans=0;
        for(int i=0;i<32;i++){
            if((x&1)!=0){
                ans+=pow(2,31-i);
            }
            x>>=1;
        }
        return ans;
    }
};