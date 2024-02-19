int minValue(string s, int k){
        // code here
        unordered_map<char,int>mp;
        for(int i=0;i<s.size();i++)
        mp[s[i]]++;
        priority_queue<int>pq;
        for(auto it:mp){
            pq.push(it.second);
        }
        while(k){
            int x=pq.top();
            pq.pop();
            x--;
            pq.push(x);
            k--;
        }
        int sum=0;
        while(!pq.empty()){
            int d=pq.top();
            sum+=d*d;
            pq.pop();
        }
        return sum;
    }