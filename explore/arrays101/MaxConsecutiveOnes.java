/**
 * MaxConsecutiveOnes
 */
public class MaxConsecutiveOnes {

    /**
     * Solution
     */
    public class Solution {
        public int findMaxConsecutiveOnes(int[] nums) {
            int ans = 0, current_consecutive_ones_length = 0;
            for (int n : nums) {
                if (n == 1) {
                    current_consecutive_ones_length++;
                } else {
                    ans = Math.max(ans, current_consecutive_ones_length);
                    current_consecutive_ones_length = 0;
                }
            }
            ans = Math.max(ans, current_consecutive_ones_length);
            return ans;
        }
    }
}