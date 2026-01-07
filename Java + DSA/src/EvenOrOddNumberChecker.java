import java.util.Scanner;

public class EvenOrOddNumberChecker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Even or Odd Number Checker");
        System.out.print("Enter a number: ");
        int num = sc.nextInt();

        if (num % 2 == 0) {

            System.out.println(num + " is an Even number");

        } else {

            System.out.println(num + " is an Odd number");

        }

        sc.close();
    }
}
