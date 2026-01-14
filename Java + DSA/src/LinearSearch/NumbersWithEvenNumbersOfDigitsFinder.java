package LinearSearch;

public class NumbersWithEvenNumbersOfDigitsFinder {

    public static void main(String[] args) {
        int[] nums = {12,345,2,6,7896};
        System.out.println(findNumbers(nums));
        System.out.println(digits(7896));
        System.out.println(digits2(-7896));
    }

    static int findNumbers(int[] nums) {
        int count = 0;
        for (int num : nums) {
            if (even(num)) {
                count++;
            }
        }
        return  count;
    }

    // function to check if the number contain even number of digit or not
    static boolean even(int num) {
       int numberOfDigits = digits(num);

       return numberOfDigits % 2 == 0;
    }

    // function to count the number of digits
    static int digits(int num) {

        if (num < 0) {
            num *= -1;
        }

        if (num == 0) {
            return 1;
        }

        int count = 0;

        while (num > 0) {
            count++;
            num /= 10;
        }

        return count;
    }

    static int digits2(int num) {
        if (num < 0) {
            num *= -1;
        }

        return (int)(Math.log10(num)) + 1;
    }

}
