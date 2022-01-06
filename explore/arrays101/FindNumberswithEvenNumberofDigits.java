package arrays101;

public class FindNumberswithEvenNumberofDigits {
    /**
     * Solution
     */
    public class Solution {
    
        public int findNumbers(int[] nums) {
            int ans = 0;
            for (int n : nums) {
                if (is_even_digits(n)) {
                    ans++;
                }
            }
            return ans;
        }

        public boolean is_even_digits(int num) {
            String num_string = String.valueOf(num);
            return ((num_string.length() % 2) == 0);
        }

        public static void main(String[] args) {
            int a = -234;
            System.out.println(String.valueOf(a).length());
        }
    }
}
