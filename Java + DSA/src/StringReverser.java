import java.util.Scanner;

public class StringReverser {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("=== String Reverser ===");
        System.out.print("Enter the string: ");
        String originalStr = sc.next();

        // convert string to char array
        char[] chars = originalStr.toCharArray();
        int left = 0;
        int right = chars.length - 1;

        while (left < right) {
            // swap characters
            char temp = chars[left];
            chars[left] = chars[right];
            chars[right] = temp;

            left++;
            right--;

        }

        // convert back to string
        String reversedStr = new String(chars);

        System.out.println("Reversed: " + reversedStr);

        sc.close();
    }

}
