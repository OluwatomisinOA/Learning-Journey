package learningprojects;

import java.util.Scanner;

public class FactorialCalculator {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Factorial Calculator ===");

        while (true) {

            System.out.print("Enter a number to calculate the factorial: ");
            long num = sc.nextLong();

            if (num < 0) {
                System.out.println("Factorial is not defined for a negative number!");
            } else {
                System.out.println(num + "! = " + Factorial(num));
            }

            System.out.print("Do you want to calculate the factorial of another number (yes or no): ");
            String ans = sc.next().trim().toLowerCase();

            if (!ans.equals("yes")) {
                System.out.println("Thank you for using the Factorial Calculator Program.");
                break;
            }
        }

        sc.close();

    }

    public static long Factorial(long n) {
        long result = 1;

        for (int i = 1; i <= n; i++) {
            result *= i;
        }

        return result;
    }

}
