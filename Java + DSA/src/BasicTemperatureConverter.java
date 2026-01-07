import java.util.Scanner;

public class BasicTemperatureConverter {

    public static void main(String[] args) {

        Scanner inp = new Scanner(System.in);

        System.out.println("Basic Temperature Converter in Java");
        System.out.println("1. Celsius to Fahrenheit");
        System.out.println("2. Fahrenheit to Celsius");

        System.out.print("Choice (1 or 2): ");
        int choice = inp.nextInt();

        if (choice == 1) {

            System.out.print("Enter Temperature in Celsius: ");
            float tempC = inp.nextFloat();
            float tempF = (tempC * (9f / 5)) + 32;
            System.out.println("Temperature in Fahrenheit: " + tempF);

        } else if (choice == 2) {

            System.out.print("Enter Temperature in Fahrenheit: ");
            float tempF = inp.nextFloat();
            float tempC = (tempF - 32) * (5f / 9);
            System.out.println("Temperature in Celsius: " + tempC);

        } else {
            System.out.println("Invalid choice!");
        }

        inp.close();

    }
}
