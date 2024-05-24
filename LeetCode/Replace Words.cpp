
class Solution {
public:
    string replaceWords(vector<string>& dictionary, string sentence) {
        unordered_set<string> dictSet(dictionary.begin(), dictionary.end());
        istringstream iss(sentence);
        ostringstream oss;
        string word;

        while (iss >> word) {
            string prefix;
            for (size_t i = 1; i <= word.size(); ++i) {
                prefix = word.substr(0, i);
                if (dictSet.find(prefix) != dictSet.end()) {
                    break;
                }
            }
            oss << prefix << " ";
        }

        string result = oss.str();
        if (!result.empty()) {
            result.pop_back(); // Remove the trailing space
        }

        return result;
    }
};