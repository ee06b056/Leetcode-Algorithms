/*
 * @lc app=leetcode id=1079 lang=java
 *
 * [1079] Letter Tile Possibilities
 */

// @lc code=start

import java.util.*;
class Solution {
    public int numTilePossibilities(String tiles) {
        char[] tilesChars = tiles.toCharArray();
        Arrays.sort(tilesChars);
        boolean[] inUse = new boolean[tiles.length()];

        return dfs(tilesChars, inUse) - 1;
    }

    private int dfs(char[] tChar, boolean[] inUse) {
        int tmp = 1;
        for (int i = 0; i < tChar.length; i++) {
            if (inUse[i]) continue;
            if (i > 0 && tChar[i] == tChar[i - 1] && !inUse[i - 1]) continue;
            inUse[i] = true;
            tmp += dfs(tChar, inUse);
            inUse[i] = false;
        }
        return tmp;
    }

}
// @lc code=end

