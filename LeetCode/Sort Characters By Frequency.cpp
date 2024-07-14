class Solution {
public:
    string frequencySort(string s) {
         std::unordered_map<char, int> countMap;

    for (char c : s) {
        countMap[c]++;
    }

      std::priority_queue<std::pair<int, char>> pq;

    // Insert elements from unordered_map into priority queue
    for (const auto& pair : countMap) {
        pq.push({pair.second, pair.first});
    }

    string ans = {};

     while (!pq.empty()) {
        auto top = pq.top();
        pq.pop();
        ans.append(top.first, top.second); // Append 'top.second' character 'top.first' times
    }

    return ans;

    }
};