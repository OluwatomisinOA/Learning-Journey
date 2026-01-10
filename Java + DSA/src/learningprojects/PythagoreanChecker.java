package learningprojects;

import java.util.Scanner;

public class PythagoreanChecker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Pythagorean Checker ===");

        while (true) {

            System.out.println("Enter three numbers to check if they are Pythagorean Triplet");

            System.out.print("Enter the first number: ");
            double num1 = sc.nextDouble();

            System.out.print("Enter the second number: ");
            double num2 = sc.nextDouble();

            System.out.print("Enter the third number: ");
            double num3 = sc.nextDouble();

            if (isPythagoreanTriplet(num1, num2, num3)) {
                System.out.println("Yes, they are Pythagorean Triplet.");
            } else {
                System.out.println("No, they are not Pythagorean Triplet.");
            }

            System.out.print("Do you want to check for another set of numbers: ");
            String ans = sc.next().trim().toLowerCase();

            if (!ans.equals("yes")) {
                System.out.println("Thank you for using the Pythagorean Checker Program.");
                break;
            }

        }

        sc.close();

    }

    public static boolean isPythagoreanTriplet(double a, double b, double c) {

        double sqA = a * a;
        double sqB = b * b;
        double sqC = c * c;

        if (sqA + sqB  == sqC || sqB + sqC == sqA || sqC + sqA == sqB) {
            return true;
        }

        return false;

    }

}
