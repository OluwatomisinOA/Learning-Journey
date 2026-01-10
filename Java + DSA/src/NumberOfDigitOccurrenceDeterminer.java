import java.util.Scanner;

public class NumberOfDigitOccurrenceDeterminer {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the number: ");
        int num = sc.nextInt();

        System.out.print("Enter the digit to determine the number of occurrence: ");
        int digit = sc.nextInt();

        int count = 0;
        while (num > 0) {

            int rem = num % 10;
            if (rem == digit) {

                count++;

            }

            num /= 10;

        }

        System.out.println(count);

        sc.close();

    }

}
