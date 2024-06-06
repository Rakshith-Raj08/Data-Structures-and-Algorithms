class Solution{
  public:
    // Function to find floor of x
    // n: size of vector
    // x: element whose floor is to find
    int findFloor(vector<long long> v, long long n, long long x){
        
        auto lb = lower_bound(v.begin(), v.end(), x);

        // If the lower bound points to the first element and it is greater than x, there is no floor
        if (lb == v.begin() && *lb > x) {
            return -1;
        }

        // If the lower bound points to the end of the vector or to an element greater than x, move one step back
        if (lb == v.end() || *lb > x) {
            lb--;
        }

        // Return the index of the floor element
        return lb - v.begin();
    }
};