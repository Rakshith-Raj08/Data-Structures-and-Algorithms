class Solution {
public:
    int reverse(long long  num,long long result=0) {
        if (num == 0){
            return result;
        }
        
        long long  lastDigit = num % 10;
        
        
        result = result * 10 + lastDigit;
        
      
        return reverse(num / 10,result);
}
    
};