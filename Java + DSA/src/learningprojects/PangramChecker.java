package learningprojects;

import java.util.Scanner;

public class PangramChecker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Pangram Checker Program ===");
        System.out.println("Enter the sentence: ");
        String sentence = sc.nextLine().trim().toLowerCase();

        boolean result = checkIfPangram(sentence);
        System.out.println("Is it a Pangram?: " + result);

    }

    public static boolean checkIfPangram(String sentence) {
        boolean[] seen = new boolean[26];

        for (char c: sentence.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                int index = c - 'a';
                seen[index] = true;
            }
        }

        for (boolean status: seen) {
            if (status == false) {
                return false;
            }
        }

        return true;

    }
}
