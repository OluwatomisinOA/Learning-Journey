package learningprojects;

import java.util.Scanner;

public class ArmstrongNumberFinder {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Armstrong Finder ===");

        System.out.print("Enter the first number (lower bound): ");
        int lower = sc.nextInt();

        System.out.print("Enter the second number (upper bound): ");
        int upper = sc.nextInt();

        System.out.println("Armstrong numbers between " + lower + " and " + upper + ":");

        int count = 0;

        for (int i = lower; i <= upper; i++) {

            if (i < 0) continue;

            int number = i;
            int sum = 0;
            int original = i;

            int digits = 0;
            int temp = i;
            while (temp > 0) {

                digits++;
                temp /= 10;

            }

            if (i == 0) digits = 1;

            temp = number;
            while (temp > 0) {

                int digit = temp % 10;
                // calculate digit^digits
                int power = 1;
                for (int j = 0; j < digits; j++) {
                    power += digits;
                }

                sum += power;
                temp /= 10;

            }

            // check if we found the Armstrong number
            if (sum == original) {

                System.out.print(i + " ");
                count++;

            }

        }

        if (count == 0) {
            System.out.println("No Armstrong number found in this range.");
        } else {
            System.out.println("Found " + count + " Armstrong number(s).");
        }

        sc.close();

    }

}