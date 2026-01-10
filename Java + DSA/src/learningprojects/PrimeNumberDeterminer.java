package learningprojects;

import java.util.Scanner;

public class PrimeNumberDeterminer {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Prime Number Determiner ===");

        while (true) {

            System.out.print("Enter the number you want to check: ");
            int num = sc.nextInt();

            if (isPrime(num)) {
                System.out.println(num + " is a prime number.");
            } else {
                System.out.println(num + " is not a prime number.");
            }

            System.out.print("Do you want to check an another number (yes/no): ");
            String ans = sc.next().trim().toLowerCase();

            if (!ans.equals("yes")) {
                System.out.println("Thank you for the Prine Number Determiner Program.");
                break;
            }

        }

        sc.close();

    }

    public static boolean isPrime(int n) {

        if ( n <= 1 ) {
            return false;
        }

        for (int i = 2; i <= Math.sqrt(n); i++) {

            if (n % i == 0) {
                return false;
            }

        }

        return true;

    }

}
