import java.util.Scanner;

public class RupeesToUSDCurrencyConverter {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== Rupees(INR) to USD Converter ===");

        System.out.print("Enter amount in rupees (INR): ");
        double rupees = sc.nextDouble();

        double usd = rupees * 0.0111;
        System.out.println("Amount in USD: $" + usd);

    }

}
