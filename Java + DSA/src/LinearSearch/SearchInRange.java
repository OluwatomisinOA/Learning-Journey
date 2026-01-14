package LinearSearch;

public class SearchInRange {

    public static void main(String[] args) {

        int[] nums = {23, 4, 5, 34, 6, 45, 19, 67, 12, 6};
        int target = 19;
        int ans = linearSearch(nums, target, 1, 8);
        System.out.println(ans);
    }

    static int linearSearch(int[] arr, int target, int start, int end) {
        if (arr.length == 0 ) {
            return -1;
        }

        // run a for loop
        for (int index = start; index < end; index++) {
            // check for element at every index if it is equal to target

            int element = arr[index];
            if (element == target ) {
                return index;
            }
        }

        // this line will execute if none of the return statements above have executed
        // hence the target not found
        return -1;
    }

}
