package LinearSearch;

public class FindMinimumNumber {

    public static void main(String[] args) {

        int[] arr = {2,4,-48,6,-12,3,10};
        System.out.println(min(arr));

    }

    // assume that arr.length != 0
    // return minimum number
    static int min(int[] arr) {
        int ans = arr[0];
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] < ans) {
                ans = arr[i];
            }
        }
        return ans;
    }

}
