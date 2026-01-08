import java.util.Scanner;

public class CaseChecker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter the string or the letter: ");
        char ch = sc.next().trim().charAt(0);

        if (ch >= 'a' && ch <= 'z') {

            System.out.println("Lowercase");

        } else {

            System.out.println("Uppercase");

        }

        sc.close();

    }

}
