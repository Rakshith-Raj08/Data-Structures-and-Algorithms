class Solution{
  public:
    long long int floorSqrt(long long int x) 
{
    // Your code goes here 
    
    //firstly check the border cases 
    
    if(x==0 || x<0) return 0;
    if(x==1 ||x==2) return 1;
    
    
    
    long long start = 1 , end = x; 
    
    while(start<=end){
        long long mid = start + (end - start)/2;
        
        if(mid*mid == x) return mid ;
        
        else if(mid*mid< x) start = mid+1;
        
        else end = mid - 1;
        
    } return start-1;
}
};