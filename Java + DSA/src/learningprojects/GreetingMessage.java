package learningprojects;

import java.util.Scanner;

public class GreetingMessage {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Greeting Message");
        System.out.print("Enter your name: ");
        String name = sc.next();
        System.out.println("Hi " + name + ", how are you doing?");
        System.out.println("Stay blessed.");

        sc.close();

    }
}
