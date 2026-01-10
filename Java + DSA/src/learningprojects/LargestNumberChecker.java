package learningprojects;

import java.util.Scanner;

public class LargestNumberChecker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Largest Number Checker ===");

        System.out.print("Enter the first number: ");
        double num1 = sc.nextDouble();

        System.out.print("Enter the second number: ");
        double num2 = sc.nextDouble();

        if (num1 > num2) {

            System.out.println(num1 + " is the Largest number.");

        } else if (num1 < num2) {

            System.out.println(num2 + " is the Largest number.");

        } else {

            System.out.println(num1 + " and " + num2 + " are equal.");

        }

    }

}
