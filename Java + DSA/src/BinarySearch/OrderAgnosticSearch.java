package BinarySearch;

public class OrderAgnosticSearch {

    public static void main(String[] args) {

        int[] arr = {-18, -12, -7, -3, 0, 2, 5, 6, 9, 12, 14, 17, 18, 20, 45 ,99};
        int target = 20;
        int ans = orderAgnostic(arr, target);
        System.out.println(ans);

        int[] arr2 = {99, 45, 20, 18, 16, 17, 13, 9, 5, -1, -10};

        int ans2 = orderAgnostic(arr2, target);
        System.out.println(ans2);

    }

    static int orderAgnostic(int[] arr, int target) {

        int start = 0;
        int end = arr.length - 1;

        boolean isAsc = arr[start] < arr[end];

        while (start <= end) {
            int mid = start + ((end - start) / 2);

            if (target == arr[mid]) {
                return mid;
            }

            if (isAsc) {
                if (target < arr[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } else {
                if (target > arr[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }

        }

        return -1;

    }

}
