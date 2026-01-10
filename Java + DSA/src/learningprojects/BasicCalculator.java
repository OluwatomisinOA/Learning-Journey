package learningprojects;

import java.util.Scanner;

public class BasicCalculator {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Basic Calculator ===");
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        System.out.println("4. Division");

        while (true) {

            System.out.print("Enter choice (1/2/3/4): ");
            int choice = sc.nextInt();

            sc.nextLine();

            if (choice < 1 || choice > 4) {

                System.out.println("Invalid choice! Please enter 1/2/3/4");
                continue;

            }

            System.out.print("Enter first number: ");
            double num1 = sc.nextDouble();

            System.out.print("Enter second number: ");
            double num2 = sc.nextDouble();

            double result = 0;
            boolean valid = true;

            switch (choice) {

                case 1:
                    result = num1 + num2;
                    break;

                case 2:
                    result = num1 - num2;
                    break;

                case 3:
                    result = num1 * num2;
                    break;

                case 4:
                    if (num2 == 0) {
                        System.out.println("Division by zero is not valid!");
                        valid = false;
                    } else {
                        result = num1 / num2;
                    }
                    break;

                default:
                    valid = false;
            }

            if (valid) {
                System.out.println("Result:" + result);
            }

            System.out.print("Do you want to perform any another operation? (yes/no): ");
            String answer = sc.next().trim().toLowerCase();

            if (!answer.equals("yes")) {
                System.out.println("Thank you for using the calculator program");
                break;
            }

        }

        sc.close();

    }

}