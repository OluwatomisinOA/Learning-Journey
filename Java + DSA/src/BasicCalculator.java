import java.util.Scanner;

public class BasicCalculator {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("==== Basic Calculator ====");
        System.out.println("1. Addition");
        System.out.println("2. Subtraction");
        System.out.println("3. Multiplication");
        System.out.println("4. Division");

        double result = 0;

        while (true) {

            System.out.print("Enter choice of operation (1/2/3/4): ");
            int choice = sc.nextInt();

            if (choice == 1 || choice == 2 || choice == 3 || choice == 4) {

                System.out.print("Enter the first number: ");
                double num1 = sc.nextDouble();

                System.out.print("Enter the second number: ");
                double num2 = sc.nextDouble();

                if (choice == 1) {

                    result = num1 + num2;

                } else if (choice == 2) {

                    result = num1 - num2;

                } else if (choice == 3) {

                    result = num1 * num2;

                } else {

                    if (num2 == 0) {

                        System.out.println("Division by zero is invalid!");

                    } else {

                        result = num1 / num2;

                    }

                }

            } else {

                System.out.println("Invalid choice! Please enter the valid choice (1/2/3/4).");

            }

            System.out.println("Result: " + result);

            System.out.print("Do you want to perform another operation (yes or no): ");
            String ans = sc.next().toLowerCase().trim();

            if (ans == "yes") {

                continue;

            } else {

                System.out.println("Thank you for using the calculator program.");

                break;

            }

        }

        sc.close();

    }

}
