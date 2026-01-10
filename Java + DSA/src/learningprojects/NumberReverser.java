package learningprojects;

import java.util.Scanner;

public class NumberReverser {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Number Reverser ===");
        System.out.print("Enter the number you want to reverse: ");
        int num = sc.nextInt();

        int ans = 0;

        while (num > 0) {

            int rem = num % 10;
            num /= 10;

            ans = ans * 10 + rem;

        }

        System.out.println("Reversed Number: " + ans);

        sc.close();

    }

}
