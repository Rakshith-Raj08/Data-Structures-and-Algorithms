class Solution {
public:
    string convert(string s, int numRows) {

      if (numRows == 1) return s;  // special case

    map<int, string> rows;   // key = row index, value = collected characters
    int row = 0;
    bool down = true; // direction flag (true = going down, false = going up)

    for (char c : s) {
        rows[row] += c;  // put character in current row

        // change direction when hitting top/bottom
        if (row == 0) down = true;
        else if (row == numRows - 1) down = false;

        // move up or down
        row += (down ? 1 : -1);
    }

    // concatenate all rows
    string result;
    for (int i = 0; i < numRows; i++) {
        result += rows[i];
    }
    return result;
    }
};