import java.util.Scanner;

import static java.lang.Math.log10;

public class ArmstrongNumberFinder {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Armstrong Finder ===");

        System.out.print("Enter the first number (lower bound): ");
        int lower = sc.nextInt();

        System.out.print("Enter the second number (upper bound): ");
        int upper = sc.nextInt();

        System.out.println("Armstrong numbers between " + lower + " and " + upper + ":");

        for (int i = lower; i <= upper; i++) {

            if (i < 0) continue;



        }
    }

}