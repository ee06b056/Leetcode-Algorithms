/*
 * @lc app=leetcode id=168 lang=java
 *
 * [168] Excel Sheet Column Title
 *
 * https://leetcode.com/problems/excel-sheet-column-title/description/
 *
 * algorithms
 * Easy (29.74%)
 * Likes:    916
 * Dislikes: 192
 * Total Accepted:    194.7K
 * Total Submissions: 649.5K
 * Testcase Example:  '1'
 *
 * Given a positive integer, return its corresponding column title as appear in
 * an Excel sheet.
 * 
 * For example:
 * 
 * 
 * ⁠   1 -> A
 * ⁠   2 -> B
 * ⁠   3 -> C
 * ⁠   ...
 * ⁠   26 -> Z
 * ⁠   27 -> AA
 * ⁠   28 -> AB 
 * ⁠   ...
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: 1
 * Output: "A"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 28
 * Output: "AB"
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 701
 * Output: "ZY"
 * 
 */

// @lc code=start

import java.util.*;
class Solution {
    public String convertToTitle(int n) {
        StringBuilder sb = new StringBuilder();
        String alphbt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        List<Integer> index = new ArrayList<>();
        do {
            index.add(0, --n % 26);
            n /= 26;
        } while (n != 0);
        for (int i : index) {
            sb.append(alphbt.charAt(i));
        }
        return sb.toString();
    }

}
// @lc code=end

