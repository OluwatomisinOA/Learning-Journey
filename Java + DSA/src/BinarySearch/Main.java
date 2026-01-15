package BinarySearch;

public class Main {

    public static void main(String[] args) {

        int[] arr = {-18, -12, -7, -3, 0, 2, 5, 6, 9, 12, 14, 17, 18, 20, 45 ,99};
        int target = 20;
        int ans = binarySearch(arr, target);
        System.out.println(ans);

    }

    static int binarySearch(int[] arr, int target) {
        int start = 0;
        int end = arr.length - 1;

        while (start <= end) {
            int mid = start + ((end - start) / 2);

            if (target < arr[mid]) {
                end = mid - 1;
            } else if (target > arr[mid]) {
                start = mid + 1;
            } else {
                return mid;
            }
        }

        return -1;

    }

}
