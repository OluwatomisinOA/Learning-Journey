package learningprojects;

import java.util.Scanner;

public class FibonacciSeries {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Fibonacci Series ===");

        int n;
        int num1 = 0;
        int num2 = 1;

        System.out.print("Enter the number of terms (n): ");

        if (sc.hasNextInt()) {

            n = sc.nextInt();

            if (n <= 0) {

                System.out.println("Please enter a positive integer.");

            } else if (n == 1) {

                System.out.println("Fibonacci Series up to 1 term:");
                System.out.println(num1);

            } else {

                System.out.println("Fibonacci Series up to " + n + " terms:" );
                System.out.print(num1 + " " + num2 + " ");

                for (int i = 2; i < n; i++) {

                    int nextNum = num1 + num2;
                    System.out.print(nextNum + " ");
                    num1 = num2;
                    num2 = nextNum;

                }

                System.out.println();

            }

        } else {

            System.out.println("Invalid input. Please enter a number.");

        }

        sc.close();

    }

}
