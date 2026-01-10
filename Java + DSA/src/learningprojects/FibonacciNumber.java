package learningprojects;

import java.util.Scanner;

public class FibonacciNumber {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("=== Fibonacci Number Calculator ===");
        System.out.print("Enter the number of terms: ");
        int n = sc.nextInt();
        int num1 = 0;
        int num2 = 1;
        int count = 2;

        while (count <= n) {

            int temp = num2;
            num2 += num1;
            num1 = temp;
            count++;

        }

        System.out.print("Fibonacci Number: " + num2);

        sc.close();

    }
}
