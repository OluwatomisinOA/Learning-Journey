package learningprojects;

import java.util.Scanner;

public class BasicSimpleInterestCalculator {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Simple Interest Calculator ===");

        System.out.print("Enter Principal Amount ($): ");
        double principal = sc.nextDouble();

        System.out.print("Enter Rate of Interest (R in % per year): ");
        double rate = sc.nextDouble();

        System.out.print("Enter Time (in years): ");
        double time = sc.nextDouble();

        double simpleInterest = (principal * rate * time) / 100;

        double totalAmount = principal + simpleInterest ;

        System.out.println("------------------------------");
        System.out.println("Principal: $" + principal);
        System.out.println("Rate: " + rate);
        System.out.println("Time (in years): " + time);
        System.out.println("------------------------------");
        System.out.println("Simple Interest: $" + simpleInterest);
        System.out.println("Total Amount: $" + totalAmount);
        System.out.println("------------------------------");

        sc.close();
    }
}
