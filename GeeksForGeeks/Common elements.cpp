class Solution
{
    public:    
       vector <int> commonElements (int A[], int B[], int C[], int n1, int n2, int n3)
        {
            vector<int>v;
            unordered_map<int , bool>map1;
            unordered_map<int , bool>map2;
            unordered_map<int , bool>visited;
            for(int i = 0 ; i < n1 ; i++){
                map1[A[i]] = true;
            }
            for(int j = 0 ; j < n2 ; j++){
                if(map1[B[j]]){
                    map2[B[j]] = true;
                }
            }
            for(int k = 0 ; k < n3 ; k++){
                if(map2[C[k]]){
                    if(!visited[C[k]]){
                        v.push_back(C[k]);
                        visited[C[k]] = true;
                    }    
                }
            }
            sort(v.begin() , v.end());
            return v;
        }
};