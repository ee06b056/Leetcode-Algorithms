import java.util.*;

public class Tmp {
    public static int solution (String str1, String str2) {
        int ans = 0;
        int j = 0;
        while (j < str2.length()) {
            ans++;
            for (int i = 0; i < str1.length(); i++) {
                if (j == str2.length()) break;
                if (str1.charAt(i) == str2.charAt(j)) {
                    j++;
                }
            }
        }
        return ans;
    }

    public static float solution2 (String exp) {
        String[] expList = exp.split(" ");
        Deque<String> s1 = new ArrayDeque<>();
        Deque<Float> s2 = new ArrayDeque<>();
        int i = 0;
        while (i < expList.length) {
            if (expList[i] == "(") {
                i++;
                s1.push(expList[i]);
            } else if (expList[i] == ")") {
                String opt = s1.pop();
                float oprand1 = s2.pop();
                float oprand2 = s2.pop();
                switch (opt) {
                    case "+": s2.push(oprand1 + oprand2); break;
                    case "-": s2.push(oprand2 - oprand1); break;
                    case "*": s2.push(oprand1 * oprand2); break;
                    case "/": s2.push(oprand2 / oprand1); break;
                    default: return 0;
                }
            } else {
                s2.push(Float.valueOf(expList[i]));
            }
        }
        return s2.pop();
    }

    public static void main(String[] args) {
        String exp = "(+ 2 (- 3 4))";
        Tmp.solution2(exp);
    }
}