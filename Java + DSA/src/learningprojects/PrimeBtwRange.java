package learningprojects;

import java.util.Scanner;

public class PrimeBtwRange {

    public static void PrimeFinder(int beg, int end) {

        // iterates through every number in the range
        for (int i = beg; i <= end; i++) {

            if (i <= 1) continue;

            boolean prime = true;

            // checks if 'i' is divisible by any number from 2 up to i/2
            for (int j = 2; j <= i/2; j++) {

                if (i % j == 0) {

                    prime = false;
                    break;

                }

            }

            // if the flag is still true, print the number
            if (prime) {
                System.out.println(i + "");
            }
        }

        System.out.println(); // print a new line at the end for clean output

    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Prime Number Finder ===");

        while (true) {

            System.out.print("Enter the start number (lower bound): ");
            int beg = sc.nextInt();

            System.out.print("Enter the end number (upper bound): ");
            int end = sc.nextInt();

            PrimeFinder(beg, end);

            System.out.print("Do you want to check for another given range of numbers (yes/no): ");
            String ans = sc.next().trim().toLowerCase();

            if (!ans.equals("yes")) {
                System.out.println("Thank you for using the Prime Number Finder.");
                break;
            }
        }
        sc.close();
    }

}
