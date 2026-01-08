import java.util.Scanner;

public class PalindromeChecker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Palindrome Checker ===");
        System.out.print("Enter a string (word): ");
        String original = sc.next();

        String str = original.toLowerCase();
        int start = 0;
        int end = str.length() - 1;
        boolean isPalindrome = true;

        while (start < end) {

            if (str.charAt(start) != str.charAt(end)) {

                isPalindrome = false;
                break;

            }

            start++;
            end--;

        }

        if (isPalindrome) {

            System.out.println(original + " is a palindrome.");

        } else {

            System.out.println(original + " is not a palindrome.");

        }

        sc.close();

    }

}
